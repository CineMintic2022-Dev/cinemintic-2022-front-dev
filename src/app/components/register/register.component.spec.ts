import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { RegisterComponent } from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const userResponse ={
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

  const userServiceMock = {
    login: jest.fn(),
    register: jest.fn(),
    update: jest.fn(),
    loginValidate: jest.fn(),
    updatePassword: jest.fn()
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run register in onRegister', () => {
    component.loading = true;
    component.submitted = true;
    component.errorServer.existe = false;
    component.userRegisterForm.value;
    const spyUserService = jest.spyOn(userServiceMock, 'register').mockReturnValue(of(userResponse));
    component.onRegister();
    expect(spyUserService).toHaveBeenCalled();
  });

  it('should run register in onRegister form invalid', () => {
    component.userRegisterForm.invalid;
    component.loading = false;
  });

  it('should run register in comparaPassword', () => {
    component.userRegisterForm.controls['password'].value('123456');
    component.userRegisterForm.controls['confirmpassword'].value('123456');
    component.comparaPassword();
  });

  it('should run register in reportarErrror', () => {
    const message = 'Error server'
    component.reportarErrror(message);
  });

  it('should run register in reportarErrror false', () => {
    const message = ''
    component.reportarErrror(message);
    component.errorServer.existe = false;
  });

});
