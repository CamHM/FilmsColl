import { Injectable } from '@angular/core';
import {Option} from '../entity/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private options: Option[] = [
      /*
    {
      urlParam: 'generos',
      title: 'Generos',
      img: '../../assets/buttons/generos-color.jpg'
    },
    */
    {
      urlParam: 'populares',
      title: 'Más Populares',
      img: '../../assets/buttons/avengers-end-game-color.jpg'
    },
    {
      urlParam: 'trending',
      title: 'Tendencia semanal',
      img: '../../assets/buttons/infiltrado-kkklan-color.jpg'
    },
    {
      urlParam: 'estrenos',
      title: 'Próximos estrenos',
      img: '../../assets/buttons/IT-color.png'
    },
    {
      urlParam: 'cartelera',
      title: 'En Cartelera',
      img: '../../assets/buttons/toy-story-4-color.png'
    },
    {
      urlParam: 'mejor-calificadas',
      title: 'Mejor Calificadas',
      img: '../../assets/buttons/vertigo-color.png'
    }
  ];

  constructor() { }

  getOptions() {
    return this.options;
  }

  findOption(urlParam: string) {
    return {
      ...this.options.find( option => {
        return option.urlParam === urlParam;
      })
    };
  }
}
