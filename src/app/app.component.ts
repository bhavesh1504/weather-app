import { Component, OnInit } from '@angular/core';
import { weatherData } from './model/weatherdata';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cityName : string = 'India';
  weatherdata !: weatherData;
  tempCal:any;
  nameCal:any;
  humCal:any;
  windCal:any;
  constructor(private service : WeatherService){}
  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';

  }

  private getweatherData(cityName:string){
    this.service.getweatherData(cityName)
    .subscribe({
      next: (e)=> {
        this.weatherdata = e;
        this.tempCal = e.current;
        this.nameCal = e.location;
        this.humCal = e.current;
        this.windCal = e.current;
        console.log(e);
        
      }
    });
  }

}
