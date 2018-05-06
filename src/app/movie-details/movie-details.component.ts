import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  id = null;
  movie = null;
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.movieService.getMoviesDetails(this.id).subscribe(y => this.movie = y);

    });
  }

}
