import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearComponent } from './pages/crear/crear.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LeerComponent } from './pages/leer/leer.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environments';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LeerService } from './leer.service';
import { TareasFirebaseService } from './services/tareas-firebase.service';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearComponent,
    MenuComponent,
    LeerComponent,
    ViewTareaComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp( environment.firebaseConfig )),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"evaluacion-bravo-pablo","appId":"1:369835343048:web:0acb31a85788427bd3f9fd","storageBucket":"evaluacion-bravo-pablo.appspot.com","apiKey":"AIzaSyB88gK9VfYDpG1oyiuWsaHtznT7bmHnflo","authDomain":"evaluacion-bravo-pablo.firebaseapp.com","messagingSenderId":"369835343048","measurementId":"G-7CS2WFK3D8"}))
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }, TareasFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
