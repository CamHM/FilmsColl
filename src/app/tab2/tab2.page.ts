import { Component } from '@angular/core';
import {MovieDBService} from '../services/movie-db.service';
import {Movie} from '../entity/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  movies: Movie[];

  constructor(
      private movieDBService: MovieDBService
  ) {}

  search(event) {
    if (event.detail.value !== '') {
      this.movieDBService.searchMovie(event.detail.value)
          .subscribe(res => {
            this.movies = res.results;
          });
    }
  }
}
