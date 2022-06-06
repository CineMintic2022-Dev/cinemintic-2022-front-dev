import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdministrationCardComponent } from './components/administration-card/administration-card.component';
import { AdministrationMovieComponent } from './components/administration-movie/administration-movie.component';
import { AdministrationUserComponent } from './components/administration-user/administration-user.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { CombosComponent } from './components/combos/combos.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { PremiumCardComponent } from './components/premium-card/premium-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'administrationCard', component: AdministrationCardComponent },
  { path: 'administrationMovie', component: AdministrationMovieComponent },
  { path: 'administrationUser', component: AdministrationUserComponent },
  { path: 'billboard', component: BillboardComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'frequentQuestions', component: FrequentQuestionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'premiumCard', component: PremiumCardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'rememberPassword', component: RememberPasswordComponent },
  { path: 'pqrs', component: PqrsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
