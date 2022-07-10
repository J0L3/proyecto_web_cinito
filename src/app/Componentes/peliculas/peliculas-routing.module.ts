import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    // canActivate: [FooGuard],
    // data: { requiredRoles: ['admin', 'user'] },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    // canActivate: [FooGuard],
    // data: { requiredRoles: ['admin', 'user'] },
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    // canActivate: [FooGuard],
    // data: { requiredRoles: ['admin'] },
  },
  {
    path: 'insert',
    component: InsertComponent,
    // canActivate: [FooGuard],
    // data: { requiredRoles: ['admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
