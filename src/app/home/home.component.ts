import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { of } from "rxjs";
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { Router } from '@angular/router';
import { ApiService } from "../shared/api.service";

const APIKEY = "e8067b53";

const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef;
  apiResponse: any;
  isSearching!: boolean;

  constructor(private router: Router, private api: ApiService, private httpClient: HttpClient) { this.isSearching = false; this.apiResponse = []; console.log(this.movieSearchInput); }

  ngOnInit() {

    // console.log(this.movieSearchInput);

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;

      this.searchGetCall(text).subscribe((res) => {
        // console.log('res', res);
        this.isSearching = false;
        this.apiResponse = res;
      }, (err) => {
        this.isSearching = false;
        // console.log('error', err);
      });

    });
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

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
  }

}





