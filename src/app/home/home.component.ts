import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  dataSource: any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 
  Onhome(): void {
    this.router.navigate(['Home']);
  }

  states: string[] = [
    'Andhra Pradesh',
    'ArunachalPradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'HimachalPradesh	',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'MadhyaPradesh	',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu	',
    'Telangana',
    'Tripura',
    'UttarPradesh	',
    'Uttarakhand',
    'WestBengal	',
   
  ];
}





