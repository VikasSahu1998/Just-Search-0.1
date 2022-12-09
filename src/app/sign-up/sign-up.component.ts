import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  public showPassword: boolean = false;
 
  singupForm : FormGroup |any;

  constructor(private formbuilder: FormBuilder,private router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber:new FormControl('',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [SignUpComponent.MatchValidator('password', 'confirmPassword')]
    );
  }

  get passwordMatchError() {
    return (
      this.singupForm.getError('mismatch') &&
      this.singupForm.get('confirmPassword')?.touched
    );
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
