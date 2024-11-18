import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingHttpService } from './loading-http.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingHttpService = inject(LoadingHttpService)
  loadingHttpService.addRequest();
  return next(req).pipe(finalize(() => loadingHttpService.deleteRequest()))
};
