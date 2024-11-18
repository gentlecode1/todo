import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, filter, mergeWith, Subject, switchMap } from 'rxjs';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { Task } from './task.type';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatDialogModule, TaskComponent, MatButtonModule, MatIconModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  private readonly tasksService = inject(TasksService);
  private readonly matDialog = inject(MatDialog);
  private readonly onCreteTask = new Subject<void>();
  private readonly onEditTask = new Subject<Task>();
  private readonly afterCreateTask$ = this.onCreteTask.asObservable().pipe(
    switchMap(() => this.matDialog.open<AddTaskDialogComponent, undefined, Task>(AddTaskDialogComponent).afterClosed().pipe(filter(task => !!task))),
    switchMap((task) => this.tasksService.postTask(task)),
    switchMap(() => this.tasksService.getTasks()),
  );
  private readonly afterEditTask$ = this.onEditTask.asObservable().pipe(
    switchMap((task) => this.tasksService.editTask(task)),
    switchMap(() => this.tasksService.getTasks()),
  );
  readonly tasks$ = this.tasksService.getTasks().pipe(mergeWith(this.afterCreateTask$, this.afterEditTask$));
  createTask = () => this.onCreteTask.next();
  editTask = (task: Task) => this.onEditTask.next(task);
}