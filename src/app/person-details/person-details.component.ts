import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  id = null;
  person = null;
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
    this.movieService.getPersonDetails(this.id).subscribe(y => this.person = y);
    });
  }

}
