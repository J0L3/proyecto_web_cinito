import { HomeComponent } from './Componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./Componentes/peliculas/peliculas.module').then(
        (m) => m.PeliculasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
