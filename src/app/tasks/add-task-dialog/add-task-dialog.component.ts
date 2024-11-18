import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskDialogComponent {
  task = { title: 'New task', completed: false };
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    title: ['', Validators.required],
    isCompleted: false,
  });
}
