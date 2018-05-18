import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { EmployeesListService } from '../employees-list.service';

@Component({
  selector: 'app-students-list',
  template: `<div>
               <h3>Students List</h3>
               <ul>
                   <li *ngFor = 'let stu of students'>{{stu.id}}  {{stu.name}}</li>
               </ul>
               <input [(ngModel)] = "txtName"  type = "text" value = "ntt data" />
               <button (click) = "getdata(txtName)">Add</button>
               <button (click) = "invokeEvent($event)" >event invoke</button>
               <ul>
               <li *ngFor = 'let a of arrayList'>{{a}}</li>
               </ul>
               <h3>List of Employees Fetched using Http get</h3>
               <ul>
               <li *ngFor = 'let e of employees'>{{e.id}} {{e.firstname}} {{e.lastname}} {{e.salary}}</li>
               </ul>
              </div>`,
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  public students = [];
  public employees = [];
  public arrayList = ["green"];
  public txtName = "";
  constructor(private _students:StudentsService,private _employee:EmployeesListService) { }

  ngOnInit() {
    this.students = this._students.getstudents();
    this._employee.getEmployeesDetails().subscribe(data=>this.employees = data)
  }
  getdata(value){
    this.arrayList.push(value);
  }
  invokeEvent(event)
  {
  console.log(event);
  }
}
