export interface ICurrentResponseData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface IWeather {
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
}

export interface ISunStatus{
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// export interface ICoordinates{
//   long: number;
//   lat: number;
// }

export interface IWeatherStatus{
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ICurrentWrappedResponse {
  station: string;
  weather: IWeather;
  sunStatus: ISunStatus;
  cityName: string;
  date: number;
  //coordinates: ICoordinates;
}
