import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { RememberPasswordComponent } from './remember-password.component';

let fb = new FormBuilder();
let userProfileForm = fb.group({
  email: [''],
  password: ['']
});

describe('RememberPasswordComponent', () => {
  let component: RememberPasswordComponent;
  let fixture: ComponentFixture<RememberPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RememberPasswordComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: UserService, useValue: { movies: jest.fn(() => of({})) } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
        { provide: Router, useValue: { navigate: ()=>{} } },
      ],
      imports: 
      [
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
