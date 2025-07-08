import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/dto/employees.dto';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  positions: string[] = [];
  @Output() employees = new EventEmitter<Employee[]>();

  // handle employee search details
  employee = new FormGroup({
    firstName: new FormControl(),
    phoneNumber: new FormControl(),
    position: new FormControl(),
  });

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

  handleSearch(e: Event): void {
    e.preventDefault();

    this._employeesService
      .getEmployee({
        ...this.employee.value,
      })
      .subscribe({
        next: employees => {
          this.employees.emit(employees);
        },
        error: err => {
          console.error(err);
        },
      });
    return;
  }
}
