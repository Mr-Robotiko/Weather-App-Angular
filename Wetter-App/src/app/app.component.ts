import { Component, OnChanges, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWrappedResponse } from 'src/models/currentDataInterface';
import { IForecastWrappedResponse, WeatherByDay } from 'src/models/forecastDataInterface';
import { APIHandlingService } from 'src/services/apihandling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  city: string = '';
  title = 'weather-app';

  currentWeather$?: Observable<ICurrentWrappedResponse>;
  forecastWeather$?: Observable<WeatherByDay[]>

  constructor(private apiHandling: APIHandlingService){
  }

  getCurrentWeatherData(city: string) {
    this.city = city;
    this.currentWeather$ = this.apiHandling.getCurrentWeather(this.city);
    this.forecastWeather$ = this.apiHandling.getForecastWeather(this.city);
  }


}


