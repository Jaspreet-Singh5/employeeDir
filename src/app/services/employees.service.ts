import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, SearchEmployeeDto } from '../dto/employees.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  /**
   * Fetches employees from the backend API, filtered by any provided fields.
   * Builds a query string dynamically from the SearchEmployeeDto.
   *
   * @param employee - An object containing any subset of employee fields to filter by
   * @returns Observable<Employee[]> - An observable emitting the list of matching employees
   */
  getEmployee(employee: SearchEmployeeDto): Observable<Employee[]> {
    // Build query string dynamically for all provided fields
    const params = Object.entries(employee)
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
      .join('&');

    return this._http.get<Employee[]>(`http://localhost:3000/employees${params ? '?' + params : ''}`);
  }
}
