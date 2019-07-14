import {Component, Input, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';
import {Movie} from '../../entity/interfaces';
import {PopoverController} from '@ionic/angular';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import Chart from 'chart.js';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie: Movie;
  @Input() favorite: boolean;

  constructor(
      private storage: Storage,
      public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  saveMovie() {
    this.storage.set(`${this.movie.id}`, this.movie)
        .then(value => {
          console.log(`Película almacenada con exito`, value);
        });
  }

  async showDetails(ev: any) {
    const popover = await this.popoverController.create({
      component: MovieDetailComponent,
      componentProps: {
        movie: this.movie
      },
      cssClass: 'pop-over-style',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
