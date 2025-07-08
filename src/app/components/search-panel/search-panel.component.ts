import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  positions: string[] = [];

  constructor(private _employeesService: EmployeesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._employeesService.getPositions().subscribe({
      next: positions => {
        this.positions = positions;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  // handle employee search details
  employee = new FormGroup({
    name: new FormControl(),
    phoneNumber: new FormControl(),
    position: new FormControl(),
  });

  handleSearch(e: Event): void {
    e.preventDefault();

    this._employeesService
      .getEmployee({
        ...this.employee.value,
      })
      .subscribe({
        next: res => {
        },
        error: err => {
          console.error(err);
        },
      });
    return;
  }
}
