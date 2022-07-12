import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    InsertComponent,
    UpdateComponent,
  ],
  imports: [CommonModule, PeliculasRoutingModule, FormsModule],
})
export class PeliculasModule {}
