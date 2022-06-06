import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium-card',
  templateUrl: './premium-card.component.html',
  styleUrls: ['./premium-card.component.css']
})
export class PremiumCardComponent implements OnInit {
  banner1: string;
  banner2: string;
  banner3: string;

  fotoCard: string;

  constructor() {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';

    this.fotoCard = '/assets/img/premCard/cardImg.png';
    
  }

  ngOnInit(): void {
  }

}
