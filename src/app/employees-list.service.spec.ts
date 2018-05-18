import { TestBed, inject } from '@angular/core/testing';

import { EmployeesListService } from './employees-list.service';

describe('EmployeesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesListService]
    });
  });

  it('should be created', inject([EmployeesListService], (service: EmployeesListService) => {
    expect(service).toBeTruthy();
  }));
});
