import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  banner1: string;
  banner2: string;
  banner3: string;
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesService.movies().subscribe((data) => {
      const films = Object.entries(data);
      films.forEach((element) => {
        this.movies.push(element[1]);
      });
    });
  }
}
