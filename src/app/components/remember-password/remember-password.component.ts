import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.css'],
})
export class RememberPasswordComponent implements OnInit {
  movie1: string;
  movie2: string;
  movie3: string;
  movie4: string;
  movie5: string;
  userProfileForm: FormGroup;
  submitted: boolean = false;
  userActive: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';

    this.userProfileForm = this.fb.group({
      email: new FormControl ('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]}),
      password: new FormControl ('', {validators: [Validators.required, Validators.minLength(6)]}),
    });
  }

  ngOnInit(): void {}

  userIsRegister() {
    this.submitted = true;
    this.userService.loginValidate(this.userProfileForm.get('email')?.value).pipe(first()).subscribe(data => {
      const users = Object.entries(data);
      if (users[1][1] == 'Usuario encontrado') {
        console.log('Usuario encontrado', users[1]);
        this.userActive = true;
      } else if (users[1][1] == 'Usuario No Encontrado' && this.userProfileForm.valid) {
        Swal.fire({
          title: '¡Advertencia!',
          text: 'Usuario no registrado en la plataforma',
          icon: 'warning',
          confirmButtonColor:  '#a4161a',
          confirmButtonText: 'Aceptar',
        })
      }
    },
    error => {})
  }

  changePassword() {
    this.submitted = true;
    if (this.userProfileForm.valid) {
      this.userService.loginValidate(this.userProfileForm.get('password')?.value).pipe(first()).subscribe(data => {
        const users = Object.entries(data);
        console.log('Usuario encontrado', users[1]);
        Swal.fire({
          title: '¡Contraseña Actualizada!',
          text: 'Tus contraseña ha sido actualizada, puedes iniciar sesión',
          icon: 'success',
          confirmButtonColor: '#a4161a',
          confirmButtonText: 'Aceptar',
        }).then(async (result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login']);
          } else {
            this.router.navigate(['/rememberPassword']);
          }
        });
      },
      error => {})
    }
  }
}
