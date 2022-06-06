import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { CombosComponent } from './components/combos/combos.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PremiumCardComponent } from './components/premium-card/premium-card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { AdministrationUserComponent } from './components/administration-user/administration-user.component';
import { AdministrationMovieComponent } from './components/administration-movie/administration-movie.component';
import { AdministrationCardComponent } from './components/administration-card/administration-card.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent, 
    NavbarComponent, 
    FooterComponent, 
    LoginComponent, RememberPasswordComponent, ProfileComponent, RegisterComponent, BillboardComponent, CombosComponent, PaymentComponent, PremiumCardComponent, AboutUsComponent, FrequentQuestionsComponent, AdministrationUserComponent, AdministrationMovieComponent, AdministrationCardComponent, PqrsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
