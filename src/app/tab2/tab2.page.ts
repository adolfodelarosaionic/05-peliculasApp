import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from './../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger','El señor de los anillos', 'La vida es bella'];
  peliculas: Pelicula[] = [];

  constructor( private moviesService: MoviesService) {}

  buscar( event ) {
    console.log( event );
    const valor = event.detail.value;
    this.moviesService.buscarPelicula(valor)
      .subscribe( resp => {
        console.log('PELICULAS BUSCADAS ', resp);
      });
  }

}
