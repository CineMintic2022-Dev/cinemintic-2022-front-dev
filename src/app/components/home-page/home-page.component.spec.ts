import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { HomePageComponent } from './home-page.component';

const moviesResponse ={
  ok: true,
  msg: "Usuario encontrado",
  user: {
    address: "",
    birthday: "",
    code: "USR",
    email: "dario@gmail.com",
    genre: "",
    id: "-N2y-3O0iRiaITMI04aS",
    idRole: "",
    lastName: "Gomez",
    login: "Mintic",
    name: "Mintic",
    password: "827ccb0eea8a706c4c34a16891f84e7b",
    phone: "2222222"
  }
}

const moviesServiceMock = {
  movies: jest.fn()
};

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: MoviesService, useValue: { movies: jest.fn(() => of({})) } },
        { provide: Router, useValue: { navigate: ()=>{} } },
      ],
      imports: 
      [
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run login of userService in login', () => {
    const spy = jest.spyOn(component, 'ngOnInit');
    const spyMoviesService = jest.spyOn(moviesServiceMock, 'movies').mockReturnValue(of(moviesResponse));
    expect(spyMoviesService).toHaveBeenCalled();
    expect(spy).toBeCalled();
  });

});
