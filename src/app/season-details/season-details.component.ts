import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit {

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
      const s = this.id.split(',')[0];
      const e = this.id.split(',')[1];
      this.movieService.getSeasonDetails(s, e).subscribe(y => this.movie = y);
      //this.movieService.getMovieCredits(this.id).subscribe(y => this.cast = y.cast);
    });
  }

  onActorClick(id) {
    this.router.navigate(['/person/' + id]);
  }

}
