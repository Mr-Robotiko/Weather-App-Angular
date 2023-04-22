import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './citySearch.component.html',
  styleUrls: ['./citySearch.component.scss'],
})
export class CitySearchComponent {
  @Output() getCityName = new EventEmitter<string>();

  // Takes the input as argument
  form: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  constructor() {}

  // Gets the citys' name
  getCity(form: FormGroup) {
    const city = form.get('search')?.value;
    this.getCityName.emit(city);
    if (!city) {
      return;
    }
  }
  // Removes citys' name
  removeCity(){
    this.form.reset();
  }

}
