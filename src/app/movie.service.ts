import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  api_key = 'b225f1fefd947377677ecbb751002236';
  constructor(private http: HttpClient) { }
  movies = [{title: 'Alma'}, {title: 'Korte'}];
  getMovies(page) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
    {
      params: new HttpParams().append('api_key', this.api_key)
      .append('page', page).append('sort_by', 'popularity.desc'),
    });
  }
  searchMovies(page, term) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(
      'https://api.themoviedb.org/3/search/movie',
    {
      params: new HttpParams().append('api_key', this.api_key)
      .append('query', term).append('page', page).append('sort_by', 'popularity.desc'),
    });
  }
  getMovieDetails(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' + id,
    {
      params: new HttpParams().append('api_key', this.api_key),
    });
  }
  getPersonDetails(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/person/' + id,
    {
      params: new HttpParams().append('api_key', this.api_key),
    });
  }
  getMovieCredits(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' + id + '/credits',
    {
      params: new HttpParams().append('api_key', this.api_key),
    });
  }
  getSeries(page) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(
      'https://api.themoviedb.org/3/tv/popular',
    {
      params: new HttpParams().append('api_key', this.api_key)
      .append('page', page).append('sort_by', 'popularity.desc'),
    });
  }
  searchSeries(page, term) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(
      'https://api.themoviedb.org/3/search/tv',
    {
      params: new HttpParams().append('api_key', this.api_key)
      .append('query', term).append('page', page).append('sort_by', 'popularity.desc'),
    });
  }
  getSeriesDetails(id) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/tv/' + id,
    {
      params: new HttpParams().append('api_key', this.api_key),
    });
  }
  getSeasonDetails(id, ep) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/tv/' + id + '/season/' + ep,
    {
      params: new HttpParams().append('api_key', this.api_key),
    });
  }
}
