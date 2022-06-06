import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  loading = false;
  submitted = false;
  iconUser: string;
  errorServer = {
    existe: false,
    mensaje: '',
  };
  generos = ['Masculino', 'Femenino'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userRegisterForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      address: ['', Validators.required],
      email: ['', Validators.required],
      genre: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.iconUser = '/assets/img/icons/userprofile.png';
  }

  ngOnInit(): void {}

  onRegister() {
    this.loading = true;
    this.submitted = true;
    this.comparaPassword();
    this.errorServer.existe = false;

    if (this.userRegisterForm.invalid) {
      this.loading = false;
      return;
    }

    this.userService.register(this.userRegisterForm.value).subscribe({
      next: (data) => {
        if (data.ok) {
          localStorage.setItem('user', JSON.stringify(data.object));
          this.router.navigate(['/login']);
        } else {
          console.error('Error onRegister()', data.msg_tec);
          this.reportarErrror('Error al realizar envio datos:' + data.msg_tec);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error onRegister()', error);
        this.reportarErrror('Error al realizar envio datos:' + error);
        this.loading = false;
      },
    });
  }

  comparaPassword() {
    const control = this.userRegisterForm.controls['password'];
    const matchingControl = this.userRegisterForm.controls['confirmpassword'];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  }

  reportarErrror(message: string) {
    this.errorServer.existe = true;
    this.errorServer.mensaje = message;
  }
}
