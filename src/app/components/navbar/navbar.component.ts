import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  iconCineMintic: string;
  textCineMintic: string;
  languageItem: string;
  langs: string[] = [];
  iconUser: string;
  iconCarrito: string;
  userOn: boolean = false;

  constructor(public router: Router, http: HttpClient) {
    this.iconCineMintic = '/assets/img/icons/logo.png';
    this.textCineMintic = '/assets/img/icons/textoBlanco.png';
    this.iconUser = '/assets/img/icons/user.png';
    this.iconCarrito = '/assets/img/icons/carrito.png';
    this.languageItem = 'Default';
  }

  ngOnInit(): void {
    this.login();
    this.language();
  }

  language() {
    if (this.languageItem == 'es') {
      localStorage.setItem('language', 'es');
      location.reload();
    } else if (this.languageItem == 'en') {
      localStorage.setItem('language', 'en');
      location.reload();
    } else {
      localStorage.setItem('language', 'es');
    }
  }

  spanish() {
    this.languageItem = 'es';
    this.language();
  }

  english() {
    this.languageItem = 'en';
    this.language();
  }

  login() {
    if (localStorage.getItem('userOn') == 'true') {
      this.userOn = true;
    } else {
      this.userOn = false;
    }
  }

  logout() {
    localStorage.setItem('user', '')!;
    localStorage.setItem('userOn', 'false')!;
    this.userOn = false;
    this.router.navigate(['']);
  }
}
