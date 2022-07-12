import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModeloPelicula } from '../Models/pelicula.model';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  peliculasURL = environment.peliculas_api;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    console.log('PeliculasService');
  }

  public list(): Observable<ModeloPelicula[]> {
    return this.httpClient.get<ModeloPelicula[]>(
      this.peliculasURL + 'getall.php',
      this.httpOptions
    );
  }

  public detail(id_pelicula: string): Observable<ModeloPelicula> {
    return this.httpClient.get<ModeloPelicula>(
      this.peliculasURL + `detail/${id_pelicula}`,
      this.httpOptions
    );
  }

  public insert(Peliculas: ModeloPelicula): Observable<any> {
    return this.httpClient.post<any>(
      this.peliculasURL + 'insert',
      Peliculas,
      this.httpOptions
    );
  }

  public update(
    id_pelicula: string,
    Peliculas: ModeloPelicula
  ): Observable<any> {
    return this.httpClient.put<any>(
      this.peliculasURL + `update/${id_pelicula}`,
      Peliculas,
      this.httpOptions
    );
  }

  public delete(id_pelicula: string): Observable<any> {
    return this.httpClient.delete<any>(
      this.peliculasURL + `delete/${id_pelicula}`,
      this.httpOptions
    );
  }
}
