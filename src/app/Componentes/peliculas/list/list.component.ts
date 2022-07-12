import { PeliculasService } from './../../../Core/Servicios/peliculas.service';
import { ModeloPelicula } from './../../../Core/Models/pelicula.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  peliculas: ModeloPelicula[] = [];

  constructor(private servicioPeliculas: PeliculasService) {}

  ngOnInit(): void {
    this.loadPeliculas();
  }

  loadPeliculas(): void {
    this.servicioPeliculas.list().subscribe({
      next: (data) => (this.peliculas = data),
      error: (e) => console.error(e),
      complete: () => console.info('Complete'),
    });
  }
}
