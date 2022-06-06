import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from './../../environments/environment';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: 
			[
				{
					provide: environment,
					useValue: {},
				},
			],
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should call movies service response', () => {
		const movies = 
		{
      "-N2y6ZNc5tb6r_7v-duh": 
        {
          ageMin: "12",
          avalibreChairs: 56,
          date: "4:20",
          duration: "115",
          genre: "",
          id: "-N2y6ZNc5tb6r_7v-duh",
          idMovie: "m1",
          idSala: "1",
          image: "/assets/img/movies/m1.jpg",
          name: "Pacific Rim",
          occupiedChairs: 4,
          state: "disponible"
        }
		};
		service.movies().subscribe((response) => {
			expect(response).toEqual(movies);
		});
		const urlUser = environment.ApiUrl + '/movie';
		const req = httpTestingController.expectOne(urlUser + '/buscar-peliculas');
		expect(req.request.method).toEqual('GET');
    req.flush(movies);
	});
});
