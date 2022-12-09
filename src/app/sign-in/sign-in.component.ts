import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  public showPassword: boolean = false;
  singupForm : FormGroup |any;

  constructor(private formbuilder: FormBuilder,private router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      
    },
   
    );
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
 
}
