export interface IForecastResponseData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherStatus[];
  city: City;
}

export interface City {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherStatus {
  dt: number;
  main: Weather;
  weather: Weather[];
  wind: Wind;
  dt_txt: Date;
}

export interface Weather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  id: number;
  main: string;
  description: string;
  icon: string;
  date: Date;
}

// export interface Weather {
//   description: string;
//   icon: string;
// }

export interface Wind {
  speed: number;
}
export interface WeatherByDay {
  weather: Weather[];
}
export interface IForecastWrappedResponse {
  firstDay: WeatherByDay;
  secondDay: WeatherByDay;
  thirdDay: WeatherByDay;
  fourthDay: WeatherByDay;
  fifthDay: WeatherByDay;
}
