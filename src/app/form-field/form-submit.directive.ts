import { Directive } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[formGroup]',
  host: {
    '(ngSubmit)': 'onSubmit()',
  },
})
export class FormSubmitDirective {
  constructor(private fg: FormGroupDirective) {}

  onSubmit() {
    this.fg.form.markAllAsTouched();
  }
}
