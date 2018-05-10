import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  id = null;
  movie = null;
  Math;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {
    this.Math = Math;
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.movieService.getSeriesDetails(this.id).subscribe(y => this.movie = y);
      //this.movieService.getSeries(this.id).subscribe(y => this.seasons = y.seasons);
    });
  }

  onActorClick(id) {
    this.router.navigate(['/season/' + this.id + ',' + id]);
  }

}
