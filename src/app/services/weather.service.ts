import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url='https://api.openweathermap.org/data/2.5/weather';
  ApiKey='aca905c2d4f3bee78f41f7dab9baa9d0';

  constructor(private http : HttpClient) { }
getWeather(location){
    let params = new HttpParams()
    .set('q',location)
    .set('appid',this.ApiKey)
    return this.http.get(this.url ,{params});
}
}
