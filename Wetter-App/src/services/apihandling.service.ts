import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, first, map } from 'rxjs';
import {
  ICurrentWrappedResponse,
  ICurrentResponseData,
} from 'src/models/currentDataInterface';
import {
  IForecastResponseData,
  IForecastWrappedResponse,
  WeatherByDay,
} from 'src/models/forecastDataInterface';
import { throwError } from 'rxjs';

// Takes the format from httpmodel and save them locally
// Current weather URL
const currentApiUrl: string =
  'https://api.openweathermap.org/data/2.5/weather?q=';
// Forecast weather URL
const forecastApiUrl: string =
  'https://api.openweathermap.org/data/2.5/forecast?q=';

// // Cloud map URL
// const cloudApiUrl: string = "https://tile.openweathermap.org/map/precipitation_new/5/";

// const apiKeyMap: string = "/.png?appid=ef66fce1536ce546929eefd131d717c8";

// General api key
const apiKey: string =
  '&lang=de&units=metric&appid=ef66fce1536ce546929eefd131d717c8';

@Injectable({
  providedIn: 'root',
})
export class APIHandlingService {
  constructor(private http: HttpClient) {}

  // Filter data of current API
  private currentResponseWrapper(
    currentResponse: ICurrentResponseData
  ): ICurrentWrappedResponse {
    return {
      station: currentResponse.base,
      weather: {
        ...currentResponse.main,
        ...currentResponse.weather[0],
      },
      sunStatus: {
        ...currentResponse.sys,
      },
      cityName: currentResponse.name,
      date: currentResponse.dt,
      // long: currentResponse.coord.lon,
      // lat: currentResponse.coord.lat,
    };
  }

  // Filter Data from forecast API
  private forecastResponseWrapper(
    forecastResponse: IForecastResponseData
  ): WeatherByDay[] {
    const firstDay = forecastResponse.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === new Date().getDate()
    );
    const secondDay = forecastResponse.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === new Date().getDate() + 1
    );
    const thirdDay = forecastResponse.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === new Date().getDate() + 2
    );
    const fourthDay = forecastResponse.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === new Date().getDate() + 3
    );
    const fifthDay = forecastResponse.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === new Date().getDate() + 4
    );
    const wrappedResponse: WeatherByDay[] = [
      {
        weather: firstDay.map((getData) => {
          return {
            ...getData.main,
            date: getData.dt_txt,
            icon: getData.weather[0].icon
          };
        }),
      },
      {
        weather: secondDay.map((getData) => {
          return {
            ...getData.main,
            date: getData.dt_txt,
            icon: getData.weather[0].icon
          };
        }),
      },
      {
        weather: thirdDay.map((getData) => {
          return {
            ...getData.main,
            date: getData.dt_txt,
            icon: getData.weather[0].icon
          };
        }),
      },
      {
        weather: fourthDay.map((getData) => {
          return {
            ...getData.main,
            date: getData.dt_txt,
            icon: getData.weather[0].icon
          };
        }),
      },
      {
        weather: fifthDay.map((getData) => {
          return {
            ...getData.main,
            date: getData.dt_txt,
            icon: getData.weather[0].icon
          };
        }),
      },
    ];
    return wrappedResponse;
  }

  //Gets the current data from the API based on the input the user gives.
  public getCurrentWeather(city: string): Observable<ICurrentWrappedResponse> {
    return this.http
      .get<ICurrentResponseData>(`${currentApiUrl + city + apiKey}`)
      .pipe<ICurrentWrappedResponse>(
        map((currentResponse) => this.currentResponseWrapper(currentResponse))
      );
  }

  // Gets the forecast data form the forecast API
  public getForecastWeather(city: string): Observable<WeatherByDay[]> {
    return this.http
      .get<IForecastResponseData>(`${forecastApiUrl + city + apiKey}`)
      .pipe<WeatherByDay[]>(
        map((forecastResponse) =>
          this.forecastResponseWrapper(forecastResponse)
        )
      );
  }
}
// // // Gets the cloud map
// // public getCloudMap(long: number, lat: number): Observable<IForecastWrappedResponse>{
// //   return this.http
// //   .get<IForecastResponseData>(`${cloudApiUrl + long + '/' + lat + apiKeyMap}`)
// //   .pipe<IForecastWrappedResponse>(
// //     map((forecastResponse) => this.forecastResponseWrapper(forecastResponse))
// //   );
// //
