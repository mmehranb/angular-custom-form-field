import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      test: [null, [Validators.required]],
      test1: [0],
    });
    this.form1 = this.formBuilder.group({
      test2: [null, [Validators.required]],
      test3: [0],
      test4: [0],
    });
  }
  showFormValue() {
    // console.log(this.form);
  }
}
