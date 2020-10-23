import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Angular Weather Application';
  selectedCountry: any;
  currentTemp: any;
  condition: any;

  cities = {};

  countries = [
    {
      id: 1,
      name: 'France',
      cities: ['Paris', 'Marseille', 'Nice'],
    },
    {
      id: 2,
      name: 'Germany',
      cities: ['Hamburg', 'Berlin', 'Munich'],
    },
    {
      id: 3,
      name: 'Italy',
      cities: ['Roma', 'Milan', 'Napoli'],
    },
    {
      id: 4,
      name: 'Ukraine',
      cities: ['Kyiv', 'Lviv', 'Dnipro'],
    },
  ];

  ngOnInit() {
    this.cities = this.countries.filter((x) => x.id == 1)[0].cities;
  }

  onChange(deviceValue) {
    this.cities = this.countries.filter((x) => x.id == deviceValue)[0].cities;
  }
}
