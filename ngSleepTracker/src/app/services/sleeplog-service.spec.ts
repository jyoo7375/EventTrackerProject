import { TestBed } from '@angular/core/testing';

import { SleeplogService } from './sleeplog-service';

describe('SleeplogService', () => {
  let service: SleeplogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleeplogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
