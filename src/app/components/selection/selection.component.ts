import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WeatherLoadResponse } from '../../models/weather-load-response';
import { WeatherDataService } from '../../services/weatherdata.service';
import { Weather } from './../../models/weather';
import { default as jsonCityList } from './../../../app/';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();

  public selectedCity: string;

  public cityList: string[] = [];

  constructor(private weatherData: WeatherDataService) {}

  ngOnInit(): void {
    const cities = <City[]>jsonCityList;
    this.cityList = cities
      .filter((x) => x.country == 'UA')
      .map((x) => x.name)
      .sort((one, two) => (one > two ? 1 : -1));
    this.selectedCity = null;
  }

  submit() {
    console.log(this.selectedCity);
    this.weatherData
      .load(this.selectedCity)
      .subscribe((data: WeatherLoadResponse) => {
        this.weather.city = data.name;
        this.weather.conditions = data.weather[0].main;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.icon = this.weatherData.getIconUrl(data.weather[0].icon);

        this.onSelection.emit(this.weather);
      });
  }
}
