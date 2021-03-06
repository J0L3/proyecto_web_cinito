import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { HomeComponent } from './Componentes/home/home.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: environment.authResourceServerConfig,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
