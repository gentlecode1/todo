import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.type';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() isCompletedEventEmitter = new EventEmitter<Task>();
  isCompletedOnChange = (isCompleted: boolean) => this.isCompletedEventEmitter.emit({ ...this.task, isCompleted });
}
