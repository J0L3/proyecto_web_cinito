import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../Models/pelicula.model';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  peliculasURL = environment.peliculas_api;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {
    console.log('PeliculasService');
  }

  public list(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(
      this.peliculasURL + 'list',
      this.httpOptions
    );
  }

  public detail(idPelicula: string): Observable<Pelicula> {
    return this.httpClient.get<Pelicula>(
      this.peliculasURL + `detail/${idPelicula}`,
      this.httpOptions
    );
  }

  public insert(Peliculas: Pelicula): Observable<any> {
    return this.httpClient.post<any>(
      this.peliculasURL + 'insert',
      Peliculas,
      this.httpOptions
    );
  }

  public update(idPelicula: string, Peliculas: Pelicula): Observable<any> {
    return this.httpClient.put<any>(
      this.peliculasURL + `update/${idPelicula}`,
      Peliculas,
      this.httpOptions
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.peliculasURL + `delete/${id}`,
      this.httpOptions
    );
  }
}
