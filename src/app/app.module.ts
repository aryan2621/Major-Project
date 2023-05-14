import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AimOfProjectComponent } from './pages/aim-of-project/aim-of-project.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CropRecommendationsComponent,
  CropRecommendationsDialogComponent,
} from './features/crop-recommendations/crop-recommendations.component';
import {
  FertilizerRecommendationsDialogComponent,
  FertilizersRecommendationsComponent,
} from './features/fertilizers-recommendations/fertilizers-recommendations.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    AimOfProjectComponent,
    HomeComponent,
    CropRecommendationsComponent,
    FertilizersRecommendationsComponent,
    CropRecommendationsDialogComponent,
    FertilizerRecommendationsDialogComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase },AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
