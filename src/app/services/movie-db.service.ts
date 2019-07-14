import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestResult} from '../entity/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '?api_key=e0125bc6830bd6d8028e4cf30a4f97e1';

  constructor(private http: HttpClient) { }

  getByPopularity(): Observable<RequestResult> {
    // console.log(this.http.get(`${this.BASE_URL}/configuration/languages${this.API_KEY}`).subscribe(res => console.log(res[100])));
    return this.http.get<RequestResult>(`${this.BASE_URL}/movie/popular${this.API_KEY}&language=es`);
  }

  getByUpcoming(): Observable<RequestResult> {
    return this.http.get<RequestResult>(`${this.BASE_URL}/movie/upcoming${this.API_KEY}&language=es`);
  }

  getByTopRated(): Observable<RequestResult> {
    return this.http.get<RequestResult>(`${this.BASE_URL}/movie/top_rated${this.API_KEY}&language=es`);
  }

  getByNowPlaying(): Observable<RequestResult> {
    return this.http.get<RequestResult>(`${this.BASE_URL}/movie/now_playing${this.API_KEY}&language=es`);
  }

  getByTrending(): Observable<RequestResult> {
    return this.http.get<RequestResult>(`${this.BASE_URL}/trending/movie/week${this.API_KEY}&language=es`);
  }

  searchMovie(title): Observable<RequestResult> {
    return this.http.get<RequestResult>(`${this.BASE_URL}/search/movie${this.API_KEY}&include_adult=true&query=${title}`);
  }
}
