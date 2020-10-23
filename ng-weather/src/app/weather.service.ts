import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(public http: HttpClient) {}

  getCityWeatherByName(
    city: string,
    metric: 'metric' | 'imperial' = 'metric'
  ): Subject<string> {
    const dataSub = new Subject<string>();
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`
      )
      .subscribe(
        (data) => {
          dataSub.next(data['weather']);
        },
        (err) => {
          console.log(err);
        }
      );
    return dataSub;
  }

  getCitiesWeathersByNames(
    cities: Array<string>,
    metric: 'metric' | 'imperial' = 'metric'
  ): Subject<any> {
    const citiesSubject = new Subject();
    cities.forEach((city) => {
      citiesSubject.next(
        this.http.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`
        )
      );
    });
    return citiesSubject;
  }

  getCurrentTemp(
    city: string,
    metric: 'metric' | 'imperial' = 'metric'
  ): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`
      )
      .subscribe((weather: any) => {
        dataSubject.next(Math.round(Number(weather.main.temp)));
      });
    return dataSubject;
  }
}
