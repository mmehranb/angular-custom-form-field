import { TestBed } from '@angular/core/testing';

import { FormFieldValidationService } from './form-field-validation.service';

describe('FormFieldValidationService', () => {
  let service: FormFieldValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
