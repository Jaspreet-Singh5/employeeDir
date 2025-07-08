import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  constructor(private _employeesService: EmployeesService) {}

  // handle employee search details
  employee = new FormGroup({
    name: new FormControl(''),
    phoneNumber: new FormControl(),
    position: new FormControl(''),
  });

  handleSearch(e: Event): void {
    e.preventDefault();
    this._employeesService.getEmployee({
      ...this.employee.value,
      firstName: this.employee.value.name ?? '',
      position: this.employee.value.position ?? '',
    }).subscribe({
      next: (res) => {
      },
      error: (err) => {
        console.error(err);
      }
    });
    return;
  }
}
