import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AimOfProjectComponent } from './pages/aim-of-project/aim-of-project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CropRecommendationsComponent } from './features/crop-recommendations/crop-recommendations.component';
import { FertilizersRecommendationsComponent } from './features/fertilizers-recommendations/fertilizers-recommendations.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aim-of-project',
    component: AimOfProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'features/crop-recommendation',
    component: CropRecommendationsComponent,
  },
  {
    path: 'features/fertilizer-prediction',
    component: FertilizersRecommendationsComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
