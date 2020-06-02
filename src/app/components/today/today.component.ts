import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public WeatherCondition:any;
  public error:any;

  // iconSrc: string = "http://openweathermap.org/img/w/{{this.weatherData.weather[0].icon}.png";

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

   SendToApi(formValues) {
    console.log(formValues);
    this.weatherService.getWeather(formValues.location).subscribe( data => {
      console.log(data);
      this.weatherData=data;

     this.WeatherCondition=  this.weatherData.weather[0].main

    }), error=>{
      alert("please Enter Valid city Name");
      console.error(error);
      this.error=error;
    }

  }
}
