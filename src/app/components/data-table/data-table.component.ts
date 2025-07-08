import { Component, Input } from '@angular/core';
import { Employee } from '../../dto/employees.dto';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phoneNumber', 'position'];

  @Input() employees: Employee[] = [];
}
