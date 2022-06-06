import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  iconCineMintic: string;
  textCineMintic: string;
  facebookIcon: string;
  gmailIcon: string;
  instagramIcon: string;
  twitterIcon: string;
  whatsappIcon: string;

  constructor() {
    this.iconCineMintic = '/assets/img/icons/logo.png';
    this.textCineMintic = '/assets/img/icons/textoBlanco.png';
    this.facebookIcon = '/assets/img/icons/facebookIcon.png';
    this.gmailIcon = '/assets/img/icons/gmailIcon.png';
    this.instagramIcon = '/assets/img/icons/instagramIcon.png';
    this.twitterIcon = '/assets/img/icons/twitterIcon.png';
    this.whatsappIcon = '/assets/img/icons/whatsappIcon.png';
  }

  ngOnInit(): void {
  }

}
