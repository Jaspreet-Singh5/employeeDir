import { Component } from '@angular/core';
import { Employee } from './dto/employees.dto'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employeeDir';
  employees: Employee[] = [];

  handleEmployeesResult(employees: Employee[]) {
    this.employees = employees;
  }
}
