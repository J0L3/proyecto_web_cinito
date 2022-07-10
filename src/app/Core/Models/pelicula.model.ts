export class Pelicula {
  idPelicula: string;
  titulo: string;
  resumen: string;
  duracion: number;
  productora: string;
  idSala: number;

  constructor(
    idPelicula: string,
    titulo: string,
    resumen: string,
    duracion: number,
    productora: string,
    idSala: number
  ) {
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.resumen = resumen;
    this.duracion = duracion;
    this.productora = productora;
    this.idSala = idSala;
  }
}
