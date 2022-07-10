import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { HomeComponent } from './Componentes/home/home.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ListComponent } from './Componentes/peliculas/list/list.component';
import { DetailComponent } from './Componentes/peliculas/detail/detail.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, ListComponent, DetailComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: environment.authResourceServerConfig,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
