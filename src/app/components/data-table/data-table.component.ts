import { Component } from '@angular/core';
import { Employee } from '../../dto/employees.dto';

const EMPLOYEE_DATA: Employee[] = [
  { firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNumber: '555-1234', position: 'Manager' },
  { firstName: 'Jane', lastName: 'Smith', address: '456 Oak Ave', phoneNumber: '555-5678', position: 'Developer' },
  { firstName: 'Alice', lastName: 'Johnson', address: '789 Pine Rd', phoneNumber: '555-9012', position: 'Designer' },
  { firstName: 'Bob', lastName: 'Williams', address: '321 Maple Dr', phoneNumber: '555-3456', position: 'Tester' },
  { firstName: 'Carol', lastName: 'Brown', address: '654 Cedar Ln', phoneNumber: '555-7890', position: 'Support' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phoneNumber', 'position'];
  dataSource = EMPLOYEE_DATA;
}
