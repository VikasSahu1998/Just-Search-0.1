import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postSingup(data: any) {
    return this.http.post<any>("http://localhost:3000/signup/", data);
  }

  postCategories(data: any) {
    return this.http.post<any>("http://localhost:3000/need/", data);
  }

  postAirticket(data: any) {
    return this.http.post<any>("http://localhost:3000/Airticket/", data);
  }
  getLogin() {
    return this.http.get<any>("http://localhost:3000/signup/");
  }

  getCountries() {
    return this.http.get<any>("https://restcountries.com/v3.1/all");
  }

  // putEmp(data: any, id: number) {
  //   return this.http.put<any>("http://localhost:3000/emplist/" + id, data);
  // }

  // deleteEmp(id: number) {
  //   return this.http.delete<any>("http://localhost:3000/emplist/" + id);
  // }
}