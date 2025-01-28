import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ArrayValuesDisplayIngrid';
  //dummy employee array object prepared here.
  employees: Employee[] = [
    new Employee(1, 'user1', 101), //this is one employee object
    new Employee(2, 'user2', 102), //this is one employee object
    new Employee(3, 'user3', 103), //this is one employee object
    new Employee(4, 'user4', 104), //this is one employee object
    new Employee(5, 'user5', 105), //this is one employee object
    new Employee(6, 'user6', 106), //this is one employee object
    new Employee(7, 'user7', 107), //this is one employee object
    new Employee(8, 'user8', 108), //this is one employee object
    new Employee(9, 'user9', 109), //this is one employee object
    new Employee(10, 'user10', 110), //this is one employee object
    new Employee(11, 'user11', 111), //this is one employee object
    new Employee(12, 'user12', 112), //this is one employee object
  ];
  constructor() {
    debugger;
    console.log('employees data array started');
    console.log(this.employees);
    console.log('employees data array ended');
    console.log(10 + 50);
  }
}
