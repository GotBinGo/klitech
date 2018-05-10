import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onTvClick() {
    this.router.navigate(['/tv-picker/']);
  }
  onMovieClick() {
    this.router.navigate(['/movie-picker/']);
  }
}
