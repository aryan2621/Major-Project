import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AimOfProjectComponent } from './pages/aim-of-project/aim-of-project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CropRecommendationsComponent } from './features/crop-recommendations/crop-recommendations.component';
import { FertilizersRecommendationsComponent } from './features/fertilizers-recommendations/fertilizers-recommendations.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'aim-of-project',component:AimOfProjectComponent},
  {path:'features/crop-recommendation',component:CropRecommendationsComponent},
  {path:'features/fertilizer-prediction',component:FertilizersRecommendationsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
