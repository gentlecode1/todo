import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject, combineLatest, filter, map, mergeWith, Subject, switchMap } from 'rxjs';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { Task } from './task.type';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, TaskComponent, MatButtonModule, MatIconModule, MatInputModule],
  template: `
  <div class="tasks-container">
    <div class="button-container">
        <button mat-icon-button aria-label="Example icon button with a vertical three dot icon" (click)="createTask()">
            <mat-icon fontIcon="add"></mat-icon>
        </button>
    </div>
    <input matInput type="text" [(ngModel)]="searchValue">
    @for (task of filteredTasks$ | async; track task.id){
    <app-task [task]="task" (isCompletedEventEmitter)="editTask($event)"></app-task>
    }
</div>`,
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  private readonly tasksService = inject(TasksService);
  private readonly matDialog = inject(MatDialog);
  private readonly onCreateTask = new Subject<void>();
  private readonly onEditTask = new Subject<Task>();

  private searchValueSubject = new BehaviorSubject<string>('');
  protected searchValue$ = this.searchValueSubject.asObservable();
  protected get searchValue(): string {
    return this.searchValueSubject.value;
  }

  protected set searchValue(value: string) {
    this.searchValueSubject.next(value);
  }
  private readonly afterCreateTask$ = this.onCreateTask.asObservable().pipe(
    switchMap(() => this.matDialog.open<AddTaskDialogComponent, undefined, Task>(AddTaskDialogComponent).afterClosed().pipe(filter(task => !!task))),
    switchMap((task) => this.tasksService.postTask(task)),
    switchMap(() => this.tasksService.getTasks()),
  );
  private readonly afterEditTask$ = this.onEditTask.asObservable().pipe(
    switchMap((task) => this.tasksService.editTask(task)),
    switchMap(() => this.tasksService.getTasks()),
  );
  protected readonly tasks$ = this.tasksService.getTasks().pipe(mergeWith(this.afterCreateTask$, this.afterEditTask$));
  protected filteredTasks$ = combineLatest([this.tasks$, this.searchValue$]).pipe(
    map(([tasks, searchValue]) => this.filterTasks(tasks, searchValue)),
  );

  private filterTasks(tasks: Task[], searchValue: string): Task[] {
    const lowerSearch = searchValue.toLowerCase();
    return tasks.filter(task =>
      task.title.toLowerCase().includes(lowerSearch) ?? false);
  }
  protected createTask = () => this.onCreateTask.next();
  editTask = (task: Task) => this.onEditTask.next(task);
}