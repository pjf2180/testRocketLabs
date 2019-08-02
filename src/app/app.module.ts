import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { LoginComponent } from './components/login/login.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutingModule } from './app.routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AddNewToDoComponent } from './components/add-new-to-do/add-new-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    PendientesComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    AddNewToDoComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [AddNewToDoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
