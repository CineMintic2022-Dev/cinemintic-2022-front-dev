import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMovieComponent } from './administration-movie.component';

describe('AdministrationMovieComponent', () => {
  let component: AdministrationMovieComponent;
  let fixture: ComponentFixture<AdministrationMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
