import { TestBed } from '@angular/core/testing';

import { PaginationDummyService } from './pagination-dummy.service';

describe('PaginationDummyService', () => {
  let service: PaginationDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
