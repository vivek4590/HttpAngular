import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  getstudents()
  {
    return [{"id":101,"name":"Arun"},{"id":102,"name":"Gautam"},{"id":103,"name":"Sribin"}];
  }
}
