import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherLoadResponse } from '../../models/weather-load-response';
import { WeatherDataService } from '../../services/weatherdata.service';
import { Weather } from './../../models/weather';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();
  city: String = '';

  constructor(private weatherData: WeatherDataService) {}

  submit() {
    this.weatherData.load(this.city).subscribe((data: WeatherLoadResponse) => {
      this.weather.city = data.name;
      this.weather.conditions = data.weather[0].main;
      this.weather.temperature = Math.round(data.main.temp);
      this.weather.icon = this.weatherData.getIconUrl(
        data.weather[0].icon
      );

      this.onSelection.emit(this.weather);
    });
  }
}
