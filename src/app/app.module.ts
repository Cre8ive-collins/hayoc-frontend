import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientComponent } from './patient/patient.component';
import { HealthWorkerComponent } from './health-worker/health-worker.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './health-worker/login/login.component';
import { RegisterComponent } from './health-worker/register/register.component';
import { NewPatientComponent } from './health-worker/new-patient/new-patient.component';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './directive/sort.directive';
import { PatientencounterComponent } from './health-worker/patientencounter/patientencounter.component';
import { PatientpageComponent } from './health-worker/patientpage/patientpage.component';
import { ChartsModule } from 'ng2-charts';
import { SinglePatientComponent } from './health-worker/single-patient/single-patient.component';
import { DashboardComponent } from './patient/dashboard/dashboard.component';
import { EncounterComponent } from './patient/dashboard/encounter/encounter.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PatientComponent,
    HealthWorkerComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewPatientComponent,
    NavigationComponent,
    SortDirective,
    PatientencounterComponent,
    PatientpageComponent,
    SinglePatientComponent,
    DashboardComponent,
    EncounterComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      { path: 'healthworker', component: HealthWorkerComponent },
      { path: 'healthworker/singlepatient', component: SinglePatientComponent },
      { path: 'healthworker/login', component: LoginComponent },
      { path: 'healthworker/register', component: RegisterComponent },
      { path: 'healthworker/newpatient', component: NewPatientComponent },
      { path: 'healthworker/patientencounter', component: PatientencounterComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'patient/dashboard', component: DashboardComponent } ,
      { path: 'patient/dashboard/encounter', component: EncounterComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
