import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  Onhome(): void {
    this.router.navigate(['Home']);
  }
  Onsignup(): void {
    this.router.navigate(['SignUp']);
  }
  Oncategories(): void {
    this.router.navigate(['Categories']);
  }
  
}
