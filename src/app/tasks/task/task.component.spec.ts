import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = { id: 0, title: 'prueba', isCompleted: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title of task', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain(component.task.title);
  });

  it('should start with the checkbox unchecked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const checkboxElement = compiled.querySelector('input') as HTMLInputElement;
    expect(checkboxElement?.checked).toBeFalsy();
  });
});
