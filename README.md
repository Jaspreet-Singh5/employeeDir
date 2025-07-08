# EmployeeDir

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design Decisions

### 1. Frontend Framework and Stack
- **Angular Material** is used for UI components to ensure accessibility, responsiveness, and a consistent look and feel.
- **Tailwind CSS** is used alongside Angular Material for utility-first, rapid, and customizable styling.

### 2. Component Structure
- The application is organized into reusable components, such as `SearchPanelComponent` for searching and `DataTableComponent` for displaying employee data.
- Components communicate via input/output bindings, keeping logic modular and maintainable.

### 3. Data Modeling and Storage
- **Employee data** is stored in a local JSON file (`employee-data.json`) for simplicity and ease of development/testing. This can be replaced with an API in the future.
- **Positions** are modeled as an array of objects with `id` and `value` pairs, allowing for unique identification and future extensibility (e.g., adding descriptions or localization).
- **DTOs (Data Transfer Objects)** are used to define and enforce the structure of employee data throughout the app.

### 4. Type Safety and Linting
- TypeScript strict mode is enabled for safer, more predictable code.
- ESLint and Angular ESLint are used to enforce code quality and style consistency.

### 5. Build and Tooling
- Configuration files are set up for Prettier and EditorConfig to maintain consistent code formatting across the team.
