import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ProfileComponent } from "./profile.component";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: Router, useValue: { navigate: ()=>{} } },
        { provide: UserService, useValue: { update: jest.fn(() => of({})) } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul run obtener', () => {
    jest.spyOn(localStorage, "getItem").mockName("user").mockReturnValue('correo@gmail.com')
    component.userProfileForm.setValue({
      name: 'Dario',
      lastName: 'Perez',
      address: 'dario@gmail.com',
      email:'dario@gmail.com',
      phone: '12345',
      id: '123456'
    });
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    component.obtener();
  });

  it('shoul run profile onUpdate', () => {
    component.userProfileForm.setValue({
      name: 'Dario',
      lastName: 'Perez',
      address: 'dario@gmail.com',
      email:'dario@gmail.com',
      phone: '12345',
      id: '123456'
    });
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    component.onUpdate();
  });
})