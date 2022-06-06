import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  iconUser: string;
  userProfileForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userProfileForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      phone: new FormControl('', [Validators.required, Validators.minLength(7)]),
      id: new FormControl('', [Validators.required])
    });
    this.iconUser = '/assets/img/icons/user.png';
  }

  ngOnInit(): void {
    this.obtener();
  }

  obtener() {
    console.log((localStorage.getItem('user')));
    
    const profile = JSON.parse(localStorage.getItem('user')!);
    this.userProfileForm.setValue({
      name: profile.user.name,
      lastName: profile.user.lastName,
      address: profile.user.address,
      email: profile.user.email,
      phone: profile.user.phone,
      id: profile.user.id
    });
  }

  onUpdate() {
    this.loading = true;
    this.submitted = true;
    if (this.userProfileForm.invalid) {
      this.loading = false;
      return;
    }
    this.userService.update(this.userProfileForm.value).subscribe({
      next: (data) => {
        console.log('Aqui perfil', data);
        
        if (data.ok) {
          localStorage.setItem('user', JSON.stringify(data));
          Swal.fire({
            title: '¡Información Actualizada!',
            text: 'Tus datos han sido actualizados',
            icon: 'success',
            confirmButtonColor: '#a4161a',
            confirmButtonText: 'Aceptar',
          }).then(async (result) => {
            if (result.isConfirmed) {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['/profile']);
            }
          });
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error Profile', error);
        this.loading = false;
      },
    });
  }
}
