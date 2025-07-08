import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../components/data-table/data-table.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getEmployee(employee: Employee): Observable<Employee> {
  }
}
