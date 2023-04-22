import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Weather, WeatherByDay } from 'src/models/forecastDataInterface';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['daily-forecast.component.scss'],
})
export class DailyForecastComponent implements OnChanges {

  @Input() day?: WeatherByDay

  public dayWether: WeatherByDay = {
    weather: [],
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes["day"] && changes["day"].currentValue){
      this.dayWether = changes["day"].currentValue
    }
  }
}
