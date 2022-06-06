import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {
  form: FormGroup;
  message: string = '';
  
  onSubmit(){
    this.message = this.translate.instant('Su mensaje se envió de forma exitosa') 
    Swal.fire({
      title: 'Enviado',
      text: this.message,
      icon: 'success',
      confirmButtonColor: '#a4161a',
      confirmButtonText: "Aceptar"
    })
    this.router.navigate(['/']);
  }

  banner1: string;
  banner2: string;
  banner3: string;

  movie1: string;
  movie2: string;
  movie3: string;
  movie4: string;
  movie5: string;

  constructor(private fb: FormBuilder,private translate: TranslateService, private router: Router ) {  
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';

    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';

    this.form = this.fb.group({});
    
  }

  ngOnInit(): void {
  }

}

