import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormFieldModule } from './form-field.module';

@Injectable()
export class FormFieldValidationService {
  constructor() {}

  findValidationMessage(formControl: AbstractControl): string {
    let validationMessage = '';
    if (formControl.errors) {
      switch (Object.keys(formControl.errors)[0]) {
        case 'required':
          validationMessage = 'وارد کردن این فیلد الزامی است';
          break;
        case 'maxlength':
          validationMessage = `تعداد کارکتر نمیتواند بیشتر از ${formControl.errors['maxlength'].requiredLength} باشد.`;
          break;
        case 'email':
          validationMessage = `فرمت ایمیل را بدرستی وارد کنید`;
          break;
        case 'minlength':
          validationMessage = `تعداد کارکتر نمیتواند کمتر از ${formControl.errors['minlength'].requiredLength} باشد.`;
          break;
        case 'min':
          validationMessage = `حداقل مبلغ ورودی ${formControl.errors['min'].min} تومان است`;
          break;
        case 'max':
          validationMessage = `حداکثر مبلغ ورودی ${formControl.errors['max'].max} تومان است`;
          break;
        case 'customValidation':
          validationMessage = formControl.errors['customValidation'];
          break;
        default:
          break;
      }
    }
    return validationMessage;
  }
}
