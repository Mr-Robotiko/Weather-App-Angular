import { Component, Input, SimpleChanges } from '@angular/core';
import { ICurrentWrappedResponse } from 'src/models/currentDataInterface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  @Input() getCurrentWeather?: ICurrentWrappedResponse;

  public humidity?: number;
  public temp?: number;
  public feelsLike?: number;
  public tempMax?: number;
  public tempMin?: number;
  public pressure?: number;
  public icon: string =
    'http://openweathermap.org/img/wn/' +
    this.getCurrentWeather?.weather.icon +
    '.png';

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.pressure
    ) {
      this.pressure =
        changes['getCurrentWeather'].currentValue.weather.pressure;
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.temp
    ) {
      this.temp = changes['getCurrentWeather'].currentValue.weather.temp;
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.icon
    ) {
      this.icon =
        'http://openweathermap.org/img/wn/' +
        changes['getCurrentWeather'].currentValue.weather.icon +
        '.png';
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.feels_like
    ) {
      this.feelsLike =
        changes['getCurrentWeather'].currentValue.weather.feels_like;
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.temp_max
    ) {
      this.tempMax = changes['getCurrentWeather'].currentValue.weather.temp_max;
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.temp_min
    ) {
      this.tempMin = changes['getCurrentWeather'].currentValue.weather.temp_min;
    }
    if (
      changes['getCurrentWeather'] &&
      changes['getCurrentWeather'].currentValue.weather.humidity
    ) {
      this.humidity =
        changes['getCurrentWeather'].currentValue.weather.humidity;
    }
  }
}
