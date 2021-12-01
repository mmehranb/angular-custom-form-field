import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormFieldValidationService } from './form-field-validation.service';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormFieldComponent,
      multi: true,
    },
    FormFieldValidationService,
  ],
})
export class FormFieldComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  @Input() formCtrlName: string;
  @Input() label: string;
  @Input() fieldType: 'input' | 'textarea' = 'textarea';
  @Input() canClearValue: boolean = false;

  inputActive: boolean = false;
  inputFocus: boolean = false;
  validationMessage: string;

  get control(): AbstractControl {
    return (
      this.controlContainer.control?.get(this.formCtrlName) || new FormControl()
    );
  }

  constructor(
    private controlContainer: ControlContainer,
    private formFieldValidationService: FormFieldValidationService,
    private fg: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.getControlState();
    this.subscriptions.add(
      this.control.valueChanges.subscribe((data) => this.getControlState())
    );
  }

  private getControlState() {
    this.inputActive = !(
      this.control.value === undefined ||
      this.control.value === null ||
      this.control.value === ''
    );
    this.validationMessage =
      this.formFieldValidationService.findValidationMessage(this.control);
  }

  clearControlValue() {
    this.control.setValue(null);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
