import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from './task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly httpClient = inject(HttpClient);
  getTasks = (): Observable<Task[]> => this.httpClient.get<Task[]>(`${environment.basePathApi}tasks`).
    pipe(catchError((error) => {
      console.error(error);
      return throwError(() => error);
    }));
  getTasksError = (): Observable<Task[]> => this.httpClient.get<Task[]>(`${environment.basePathApi}tasks`).
    pipe(map(() => {
      throw new Error('Not able to fetch tasks');
    }));
  postTask = (task: Task): Observable<Task> => this.httpClient.post<Task>(`${environment.basePathApi}tasks`, task)
    .pipe(catchError((error) => {
      console.error(error);
      return EMPTY;
    }));
  editTask = (task: Task): Observable<Task> => this.httpClient.put<Task>(`${environment.basePathApi}tasks/${task.id}`, task)
    .pipe(catchError((error) => {
      console.error(error);
      return EMPTY;
    }));
}