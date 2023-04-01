import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CropYieldPredictorComponent } from './pages/crop-yield-predictor/crop-yield-predictor.component';
import { CropRecommendationComponent } from './pages/crop-recommendation/crop-recommendation.component';
import { FertilizerRecommendationComponent } from './pages/fertilizer-recommendation/fertilizer-recommendation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AimOfProjectComponent } from './pages/aim-of-project/aim-of-project.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CropYieldPredictorComponent,
    CropRecommendationComponent,
    FertilizerRecommendationComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    AimOfProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
