import { TestBed } from '@angular/core/testing';

import { LoadingHttpService } from './loading-http.service';

describe('LoadingHttpService', () => {
  let service: LoadingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
