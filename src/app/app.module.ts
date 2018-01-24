import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RideComponent } from './ride/ride.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DataService } from './data.service';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path:'suche', component: SearchComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},  
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SearchComponent,
    RideComponent,
    RideDetailComponent,
    DriverDetailComponent
  ],
  imports: [
    BrowserModule, MaterialModule, RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
