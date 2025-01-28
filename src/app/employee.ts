export class Employee {
  empid: number; //employeeid property
  empname: string; //empname property
  salary: number; //salary property
  constructor(id: number, name: string, salary: number) {
    this.empid = id;
    this.empname = name;
    this.salary = salary;
  }
  //Constructor role/job is to asign the values to proprties.
}
