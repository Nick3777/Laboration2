import { TestBed } from '@angular/core/testing';

import { DatajugglerService } from './datajuggler.service';

describe('DatajugglerService', () => {
  let service: DatajugglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatajugglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
