import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSubmitDirective } from './form-submit.directive';

@NgModule({
  declarations: [FormFieldComponent, FormSubmitDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormFieldComponent, FormSubmitDirective],
})
export class FormFieldModule {}
