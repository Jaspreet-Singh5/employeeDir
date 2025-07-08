// dto for Employee
export interface Employee {
  firstName: string;
  lastName?: string;
  address?: string;
  phoneNumber: string;
  position: string;
}

// DTO for searching employees (all fields optional)
export type SearchEmployeeDto = Partial<Employee>;
