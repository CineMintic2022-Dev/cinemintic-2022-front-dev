import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { ComboService } from './combo.service';


describe('ComboService', () => {
  let service: ComboService;
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
		service = TestBed.inject(ComboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should call combo service list combos', () => {
		const combos = 
    {
      ok: true,
      msg: "Combos Encontrados",
      combos: 
      {
        "-N3Lr2nSofZERdjjKxOh": 
        {
          description: "Palomitas Pequeñas y Gaseosa Pequeña",
          estate: "Active",
          id: "-N3Lr2nSofZERdjjKxOh",
          idRoom: "",
          idSeat: "",
          nSeats: "",
          name: "Combo 1",
          price: "$15.000"
        }
      }
  };
		service.buscarCombos().subscribe((response) => {
			expect(response).toEqual(combos);
		});
		const urlUser = environment.ApiUrl + '/combo';
		const req = httpTestingController.expectOne(urlUser + '/buscar-combos');
		expect(req.request.method).toEqual('GET');
	});
});
