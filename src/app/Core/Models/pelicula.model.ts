export class ModeloPelicula {
  id_pelicula: string;
  titulo: string;
  resumen: string;
  duracion: number;
  productora: string;
  id_sala: number;

  constructor(
    id_pelicula: string,
    titulo: string,
    resumen: string,
    duracion: number,
    productora: string,
    id_sala: number
  ) {
    this.id_pelicula = id_pelicula;
    this.titulo = titulo;
    this.resumen = resumen;
    this.duracion = duracion;
    this.productora = productora;
    this.id_sala = id_sala;
  }
}
