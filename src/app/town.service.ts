import { Injectable } from '@angular/core';
import { Town } from './town';
import { Towns } from './mock-town';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEATHER } from './weather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(
    private http: HttpClient,
  ) { }
  getTowns(): Town[] {
    return Towns;
  }
  
  getWeather(): Observable<WEATHER[]> {
    return this.http.get<WEATHER[]>("https://api.openweathermap.org/data/2.5/weather?zip={{Towns.code}}%2Cth&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e&fbclid=IwAR2ZoJh9tH2MTUaOUz5YsV7zfR5bTmRyr--Qin3I6hhVavgIzARX-5r-ni4")
  }

}
