import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './navbar.component';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: Router, useValue: { navigate: ()=>{} } },
      ],
      imports: 
      [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call language', () => {
    jest.spyOn(localStorage, "setItem").mockName("user");
    jest.spyOn(localStorage, "setItem").mockName("userOn");
    component.language();
  });

  it('should call spanish', () => {
    component.languageItem == 'es';
    component.spanish();
  });

  it('should call english', () => {
    component.languageItem == 'en';
    component.english();
  });

  it('should call login', () => {
    jest.spyOn(localStorage, "getItem").mockName("userOn").mockReturnValue('true');
    component.login();
  });

  it('should call logout', () => {
    jest.spyOn(localStorage, "setItem").mockName("user");
    jest.spyOn(localStorage, "setItem").mockName("userOn");
    component.userOn = false;
    component.logout();
  });
});
