import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormFieldComponent],
})
export class FormFieldModule {}
