import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import {
  faTemperatureEmpty,
  faTemperatureFull,
  faWind,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cityName: string = 'Sydney';
  weatherData?: WeatherData;
  faTemperatureEmpty = faTemperatureEmpty;
  faTemperatureFull = faTemperatureFull;
  faWind = faWind;
  faDropletDegree = faDroplet;
  constructor(private service: WeatherService) {}
  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.service.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
