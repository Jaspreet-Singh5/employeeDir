import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchEmployeeDto } from '../dto/employees.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getEmployee(employee: SearchEmployeeDto): Observable<any> {
    return this._http.get(`http://localhost:3000/employees?position=${employee.position}`);
  }
}
