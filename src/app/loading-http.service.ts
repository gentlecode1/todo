import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingHttpService {
  private spinnerCounter = 0;
  spinnerCounter$ = new BehaviorSubject<number>(0);

  constructor() { }

  addRequest() {
    this.spinnerCounter++;
    this.spinnerCounter$.next(this.spinnerCounter);
  }

  deleteRequest() {
    if (this.spinnerCounter > 0) {
      this.spinnerCounter--;
    }
    this.spinnerCounter$.next(this.spinnerCounter);
  }
}
