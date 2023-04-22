import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherByDay } from 'src/models/forecastDataInterface';
import { IForecastWrappedResponse, Weather } from 'src/models/forecastDataInterface';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss'],
})
export class WeeklyForecastComponent implements OnChanges {
  @Input() weeklyForecast?: WeatherByDay[];

  // save them locally
  public week?: WeatherByDay[];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weeklyForecast'] && changes['weeklyForecast'].currentValue) {
      this.week = changes['weeklyForecast'].currentValue;
    }
  }
}
