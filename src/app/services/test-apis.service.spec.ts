import { TestBed } from '@angular/core/testing';

import { TestApisService } from './test-apis.service';

describe('TestApisService', () => {
  let service: TestApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
