import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: Router, useValue: { navigate: ()=>{} } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
      ],
      imports: 
      [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run obtener in payment', () => {
    jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem');
    component.userProfileForm.setValue({
      name: 'Dario',
      lastName: 'Perez',
      address: 'dario@gmail.com',
      email: 'dario@gmail.com',
      phone: '12345',
      id: '123456'
    });
    component.obtener();
  });

  it('should call submit', () => {
    jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem');
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    component.submit();
  });

});
