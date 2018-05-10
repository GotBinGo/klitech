import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-picker',
  templateUrl: './movie-picker.component.html',
  styleUrls: ['./movie-picker.component.css']
})
export class MoviePickerComponent implements OnInit {
  movies = [];
  page = 1;
  id = null;
  Math;
  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {
    this.Math = Math;
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.addNextBatch();
    });
    window.addEventListener('scroll', x => {
      const t = document.documentElement;
      if (t.scrollHeight - t.clientHeight < t.scrollTop +  10) {
        this.onScroll();
      }
    });
  }

  onClick(id) {
    this.router.navigate(['/movie/' + id]);
  }

  onScroll() {
    this.addNextBatch();
  }

  addNextBatch() {
    if (!this.id) {
      this.movieService.getMovies(this.page).subscribe(x => this.movies = this.movies.concat(x.results));
    } else {
      this.movieService.searchMovies(this.page, this.id).subscribe(y => this.movies = this.movies.concat(y.results));
    }
    this.page++;
  }
  keyDownFunction(event, term) {
    if (event.keyCode === 13) {
      this.movies = [];
      this.page = 1;
      this.router.navigate(['/picker/' + term]);
      event.preventDefault();
    }
  }
}
