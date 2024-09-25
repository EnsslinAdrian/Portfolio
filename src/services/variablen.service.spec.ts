import { TestBed } from '@angular/core/testing';

import { VariablenService } from './variablen.service';

describe('VariablenService', () => {
  let service: VariablenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
