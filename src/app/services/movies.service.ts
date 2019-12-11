import { RespuestaMDB } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es&include_image_language=es');
  }
}
