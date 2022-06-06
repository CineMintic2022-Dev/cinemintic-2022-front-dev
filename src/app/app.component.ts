import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CINEMINTIC2022';
  language: any;
  langs: string[] = [];

  constructor(
    public translate: TranslateService,
  ) {
    this.language = localStorage.getItem('language');
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
    this.langs = this.translate.getLangs();
  }

  ngOnInit():void {}

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
