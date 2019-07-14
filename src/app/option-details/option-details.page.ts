import { Component, OnInit } from '@angular/core';
import {Movie, Option} from '../entity/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {OptionService} from '../services/option.service';
import {MovieDBService} from '../services/movie-db.service';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.page.html',
  styleUrls: ['./option-details.page.scss'],
})
export class OptionDetailsPage implements OnInit {

  param: string;
  optionLoaded: Option;
  movies: Movie[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private optionServices: OptionService,
      private movieDBService: MovieDBService
  ) { }

  ngOnInit() {
    this.getParam();
    this.loadMovies();
  }

  getParam() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!(paramMap.has('optionName'))) {
        this.router.navigate(['/tabs/tab1']);
        return;
      }
      this.param = paramMap.get('optionName');
      this.optionLoaded = this.optionServices.findOption(this.param);
    });
  }

  loadMovies() {
    if (this.param === 'generos') {
      this.movieDBService.getByPopularity().subscribe( res => {
        this.movies = res.results;
        console.log(this.movies);
      });

    } else if (this.param === 'populares') {
      this.movieDBService.getByPopularity().subscribe(res => {
        this.movies = res.results;
      });
    } else if (this.param === 'trending') {
      this.movieDBService.getByTrending().subscribe(res => {
        console.log(res);
        this.movies = res.results;
      });
    } else if (this.param === 'estrenos') {
      this.movieDBService.getByUpcoming().subscribe(res => {
        this.movies = res.results;
      });
    } else if (this.param === 'cartelera') {
      this.movieDBService.getByNowPlaying().subscribe(res => {
        this.movies = res.results;
      });
    } else if (this.param === 'mejor-calificadas') {
      this.movieDBService.getByTopRated().subscribe(res => {
        this.movies = res.results;
      });
    }
  }
}
