import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { delay } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { LoadingHttpService } from './loading-http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatProgressSpinnerModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'todo';
  requestsCount$ = inject(LoadingHttpService).spinnerCounter$.asObservable().pipe(delay(0));
}
