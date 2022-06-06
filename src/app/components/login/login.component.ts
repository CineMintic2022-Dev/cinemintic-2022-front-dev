import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  movie1: string;
  movie2: string;
  movie3: string;
  movie4: string;
  movie5: string;
  userProfileForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';

    this.userProfileForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userOn();
  }

  login() {
    this.submitted = true;
    this.userService
      .login(
        this.userProfileForm.get('email')?.value,
        this.userProfileForm.get('password')?.value
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log('Como llego', data);
          const users = Object.entries(data);
          if (users[1][1] == 'Usuario encontrado') {
            localStorage.setItem('userOn', 'true');
            window.location.href = environment.AppUrl;
          } else if (
            users[1][1] == 'Usuario No Encontrado' &&
            this.userProfileForm.valid
          ) {
            Swal.fire({
              title: '¡Advertencia!',
              text: 'Usuario o contraseña incorrectos',
              icon: 'warning',
              confirmButtonColor: '#a4161a',
              confirmButtonText: 'Aceptar',
            });
          }
        },
        (error) => {}
      );
  }

  userOn() {
    if (localStorage.getItem('userOn') == 'true') {
      this.router.navigate(['']);
    }
  }
}
