import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginFormGroup!: FormGroup;
  isLoggedIn!: false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
