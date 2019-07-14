import { Component, OnInit } from '@angular/core';
import {Movie} from '../../entity/interfaces';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor() { }

  ngOnInit() {}

}
