import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
         MatTableModule,
         MatListModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatProgressSpinnerModule
        } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { addUserReducer } from '../app/login/login.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    DoughnutComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    StoreModule.forRoot({addUser: addUserReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
