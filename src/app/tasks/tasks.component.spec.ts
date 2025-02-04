import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { Task } from './task.type';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let tasksServiceMock: jasmine.SpyObj<TasksService>;
  let matDialogMock: jasmine.SpyObj<MatDialog>;
  const tasks: Task[] = [
    { id: 1, title: 'Task 1', isCompleted: false },
    { id: 2, title: 'Task 2', isCompleted: true },
  ];

  beforeEach(async () => {
    tasksServiceMock = jasmine.createSpyObj('TasksService', ['getTasks', 'postTask', 'editTask']);
    matDialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    tasksServiceMock.getTasks.and.returnValue(of(tasks));
    // tasksServiceMock.getTasks.and.returnValue(error$);
    tasksServiceMock.postTask.and.returnValue(of({ id: 0, title: 'prueba', isCompleted: false }));
    tasksServiceMock.editTask.and.returnValue(of({ id: 0, title: 'prueba', isCompleted: false }));

    await TestBed.configureTestingModule({
      imports: [MatDialogModule, NoopAnimationsModule, TaskComponent, TasksComponent],
      providers: [
        { provide: TasksService, useValue: tasksServiceMock },
        { provide: MatDialog, useValue: matDialogMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTasks on initialization', () => {
    expect(tasksServiceMock.getTasks).toHaveBeenCalled();
  });

  it('should call editTask and refresh tasks after editing a task', () => {
    const task = { id: 0, title: 'Updated Task', isCompleted: true };
    component.editTask(task);
    expect(tasksServiceMock.editTask).toHaveBeenCalledWith(task);
    expect(tasksServiceMock.getTasks).toHaveBeenCalledTimes(2);
  });

  it('should render tasks when tasks$ emits data', () => {
    const taskComponents = fixture.debugElement.queryAll(By.css('app-task'));
    expect(taskComponents.length).toBe(tasks.length);
    expect(taskComponents[0].componentInstance.task).toEqual(tasks[0]);
    expect(taskComponents[1].componentInstance.task).toEqual(tasks[1]);
  });

  it('should handle errors when tasks$ emits an error', () => {
    const error$ = throwError(() => 'Error: Not able to fetch tasks');
    tasksServiceMock.getTasks.and.returnValue(error$);
    fixture = TestBed.createComponent(TasksComponent);
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('#error-message');
    expect(errorElement.textContent).toBe('Error: Not able to fetch tasks');
  });

});
