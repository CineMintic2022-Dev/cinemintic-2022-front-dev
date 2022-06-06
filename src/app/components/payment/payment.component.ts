import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  userProfileForm: FormGroup;

  banner1: string;
  banner2: string;
  banner3: string;
  imgMercadoPago: String;
  imgTransferencia: String;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';
    this.imgMercadoPago = '/assets/img/payment/mercadoPago.png';
    this.imgTransferencia = '/assets/img/payment/Bancolombia-nequi.png';

    this.userProfileForm = this.fb.group({
      name: new FormControl (['', Validators.required]),
      lastName: new FormControl (['', Validators.required]),
      address: new FormControl (['', Validators.required]),
      email: new FormControl (['', Validators.required]),
      phone: new FormControl (['', [Validators.required, Validators.minLength(7)]]),
      id: new FormControl (['', Validators.required]),
    });
  }

  ngOnInit(): void {
    this.obtener();
  }

  /**Validar existencia de usuario */
  obtener() {
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

  submit() {
    const profile = JSON.parse(localStorage.getItem('user')!);
    Swal.fire({
      title: 'Gracias',
      text: profile.user.name + ' ' + 'tu compra ha sido realizada, disfruta tu función',
      icon: 'success',
      confirmButtonColor: '#a4161a',
      confirmButtonText: "Aceptar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/payment']);
      }
    });
  }
}
