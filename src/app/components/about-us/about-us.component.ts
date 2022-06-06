import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  banner1: string;
  banner2: string;
  banner3: string;

  foto1: string;
  foto2: string;

  johan: string;
  esteban:string;
  jorge:string;
  juanes: string;
  Pablo:string;
  camilo:string;

  constructor() {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';

    this.foto1 = '/assets/img/aboutUs/cineFoto1.jpg';
    this.foto2 = '/assets/img/aboutUs/cineFoto2.jpg';

    this.Pablo = '/assets/img/aboutUs/Pablo.jpeg';
    this.johan = '/assets/img/aboutUs/johan.jpeg';
    this.jorge = '/assets/img/aboutUs/JorgePerez.jpg';
    this.juanes = '/assets/img/aboutUs/juanes.jpeg';
    this.esteban = '/assets/img/aboutUs/Esteban.jpeg';
    this.camilo = '/assets/img/aboutUs/Camilo.jpeg';
  }

  ngOnInit(): void {
  }

}
