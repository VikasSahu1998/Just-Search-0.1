import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  public showPassword: boolean = false;
  singinForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private router: Router, public dialog: MatDialog, private http: HttpClient, private dialogref: MatDialogRef<SignInComponent>, private api: ApiService) { }
  ngOnInit(): void {
    this.singinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),

    },

    );
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // onsinginsubmit() {
  //   this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
  //     const user = res.find((a: any) => {
  //       return a.email === this.singinForm.value.email && a.password === this.singinForm.value.password

  //     })
  //     if (user) {
  //       alert("signin Succesfully");
  //       this.singinForm.reset();
  //       this.dialogref.close('save');
  //       this.router.navigate(['Home']);

  //     } else {
  //       alert("user not found");
  //     }

  //   }, err => {
  //     alert("server error");
  //   }
  //   )
  // }



  onsinginsubmit() {
    this.api.getLogin()
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.singinForm.value.email && a.password === this.singinForm.value.password

        })
        if (user) {
          alert("signin Succesfully");
          this.singinForm.reset();
          this.dialogref.close('save');
          this.router.navigate(['Home']);

        } else {
          alert("user not found");
        }

      }, err => {
        alert("server error");
      }
      )
  }

}
