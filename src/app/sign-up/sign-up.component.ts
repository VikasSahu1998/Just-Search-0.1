import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

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

  singupForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private router: Router, public dialog: MatDialog, private http: HttpClient ,private dialogref: MatDialogRef<SignUpComponent>,private api: ApiService) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
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
  // onsingupsubmit() {
  //   this.http.post<any>("http://localhost:3000/signup", this.singupForm.value).subscribe(res => {
  //     alert("signup Succesfully");
  //     this.singupForm.reset();
  //     this.dialogref.close('save');
  //   }, err => {
  //     alert("error");
  //   }
  //   )
  // }

  onsingupsubmit(){
    if(this.singupForm.valid){
      this.api.postSingup(this.singupForm.value)
      .subscribe({
        next:(res)=>{
          alert("signup Succesfully");
          this.singupForm.reset();
         },
         error: () => {
          alert("Something went wrong ");
         }
      })
    }
  }
}
