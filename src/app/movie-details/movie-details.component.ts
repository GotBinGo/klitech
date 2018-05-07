import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id = null;
  movie = null;
  cast = [];
  Math;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {
    this.Math = Math;
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.movieService.getMovieDetails(this.id).subscribe(y => this.movie = y);
      this.movieService.getMovieCredits(this.id).subscribe(y => this.cast = y.cast);
    });
  }

  onActorClick(id) {
    this.router.navigate(['/person/' + id]);
  }

}
