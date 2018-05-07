import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  movies = [{title: 'Alma'}, {title: 'Korte'}];
  getMovies(page) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
    {
      params: new HttpParams().append('api_key', 'b225f1fefd947377677ecbb751002236')
      .append('page', page).append('sort_by', 'popularity.desc'),
    });
  }
  getMovieDetails(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' + id,
    {
      params: new HttpParams().append('api_key', 'b225f1fefd947377677ecbb751002236'),
    });
  }
  getPersonDetails(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/person/' + id,
    {
      params: new HttpParams().append('api_key', 'b225f1fefd947377677ecbb751002236'),
    });
  }
  getMovieCredits(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' + id + '/credits',
    {
      params: new HttpParams().append('api_key', 'b225f1fefd947377677ecbb751002236'),
    });
  }
}
