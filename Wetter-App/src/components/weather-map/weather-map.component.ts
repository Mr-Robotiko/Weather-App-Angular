import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.sass'],
})
export class WeatherMapComponent {
  @Input() getLat: number = 0;
  @Input() getLong: number = 0;

  public long?: number;
  public lat?: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['getLat'] && changes['getLat'].currentValue) {
      this.long = changes['getLat'].currentValue;
    }
    if (changes['getLong'] && changes['getLong'].currentValue) {
      this.lat = changes['getLong'].currentValue;
    }
  }
}
