import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-picker',
  templateUrl: './tv-picker.component.html',
  styleUrls: ['./tv-picker.component.css']
})
export class TvPickerComponent implements OnInit {
  last_term = null;
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
    this.router.navigate(['/series/' + id]);
  }

  onScroll() {
    this.addNextBatch();
  }

  addNextBatch() {
    if (!this.id) {
      this.movieService.getSeries(this.page).subscribe(x => this.movies = this.movies.concat(x.results));
    } else {
      this.movieService.searchSeries(this.page, this.id).subscribe(y => this.movies = this.movies.concat(y.results));
    }
    this.page++;
  }
  keyDownFunction(event, term) {
    if (event.keyCode === 13 ) {
      if (this.last_term != term) {
        this.movies = [];
        this.page = 1;
        this.router.navigate(['/tv-picker/' + term]);
        this.last_term = term;
      }
      event.preventDefault();
    }
  }
}
