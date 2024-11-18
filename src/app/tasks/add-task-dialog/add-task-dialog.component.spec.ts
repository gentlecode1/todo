import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskDialogComponent } from './add-task-dialog.component';

describe('AddTaskDialogComponent', () => {
  let component: AddTaskDialogComponent;
  let fixture: ComponentFixture<AddTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskDialogComponent, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.form;
    expect(form.value).toEqual({ title: '', isCompleted: false });
    expect(form.valid).toBeFalse();
  });

  it('should validate title as required', () => {
    const titleControl = component.form.get('title');
    expect(titleControl?.valid).toBeFalse();

    titleControl?.setValue('Test Task');
    expect(titleControl?.valid).toBeTrue();
  });
});
