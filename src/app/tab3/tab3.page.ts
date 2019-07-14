import {Component, OnInit} from '@angular/core';
import {Movie} from '../entity/interfaces';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  savedMovies: Movie[] = [];

  constructor(
      private storage: Storage
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.storage.forEach(movie => {
      this.savedMovies.push(movie);
    }).then(value => {
      console.log(`Películas Cargadas ${value}`);
    });
  }

  refresh() {
    this.storage.forEach(movie => {
      this.savedMovies.push(movie);
    }).then(value => {
      console.log(`Películas Cargadas ${value}`);
    });
  }

  clean() {
    this.storage.clear()
        .then(value => {
          console.log(`Base de datos eliminada`);
        });
    this.savedMovies = [];
  }
}
