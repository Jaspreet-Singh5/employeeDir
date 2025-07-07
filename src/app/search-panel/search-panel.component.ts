import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  // handle person search details
  person = new FormGroup({
    name: new FormControl(''),
    phoneNumber: new FormControl(),
    position: new FormControl(''),
  })  

  handleSearch(e: Event): void {
    e.preventDefault();
    return;
  }
}
