import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  banner1: string;
  banner2: string;
  banner3: string;
  movies: any[] = [];
  premieres: any[] = [];

  movie1: string;
  movie2: string;
  movie3: string;
  movie4: string;
  movie5: string;

  constructor(private moviesService: MoviesService) {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';
    this.movies = [];
    this.premieres = [];

    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';
  }

  ngOnInit(): void {
    this.moviesService.movies().subscribe((data) => {
      const films = Object.entries(data);
      films.forEach((element) => {
        this.movies.push(element[1]);
        this.premieres.push(element[1]);
      });
      this.movies.splice(5);
      this.premieres.splice(0,5);
    });
  }
}
