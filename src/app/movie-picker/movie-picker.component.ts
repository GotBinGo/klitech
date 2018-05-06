import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-picker',
  templateUrl: './movie-picker.component.html',
  styleUrls: ['./movie-picker.component.css']
})
export class MoviePickerComponent implements OnInit {

  movies = [];
  page = 1;
  Math;
  constructor(private movieService: MovieService, private router: Router) {
    this.Math = Math;
  }

  ngOnInit() {
    this.movieService.getMovies(this.page).subscribe(x => this.movies = this.movies.concat(x.results));
    this.page++;
  }

  onClick(id) {
    this.router.navigate(['/movie/' + id]);
  }

  onScroll() {
    this.movieService.getMovies(this.page).subscribe(x => this.movies = this.movies.concat(x.results));
    this.page++;
  }
}
