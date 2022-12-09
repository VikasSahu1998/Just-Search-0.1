import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Just-Search';
  
  //button text variable
btnVal = "LogIn";
  constructor(private router: Router, public dialog: MatDialog,) { }

  Onhome(): void {
    this.router.navigate(['Home']);
  }

  Onsignin() {
    this.dialog.open(SignInComponent, {
      width: '27%',
    })
    this.btnVal = "LogOut"
  }

  Oncategories(): void {
    this.router.navigate(['Categories']);
  }

}
