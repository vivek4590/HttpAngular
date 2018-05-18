import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './IEmployee';
import { Observable , observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesListService {
  public _url = "/assets/data/employees.json";
  constructor(private _http:HttpClient) { }

  getEmployeesDetails():Observable<IEmployee[]>{
     return this._http.get<IEmployee[]>(this._url);
  }
  
}
