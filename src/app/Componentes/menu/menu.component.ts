import { KeycloakService } from '../../Core/Servicios/keycloak.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private servicioKeycloak: KeycloakService) {}

  ngOnInit(): void {}

  public login(): void {
    this.servicioKeycloak.login();
  }

  public logout(): void {
    this.servicioKeycloak.logout();
  }

  public isLogged(): boolean {
    return this.servicioKeycloak.getIsLogged();
  }
}
