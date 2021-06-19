import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { TestComponent } from './pages/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBHwF2iDX9UAOZuXs_-cGISElQiAIYdqPk",
      authDomain: "fir-test-by-ooy.firebaseapp.com",
      projectId: "fir-test-by-ooy",
      storageBucket: "fir-test-by-ooy.appspot.com",
      messagingSenderId: "538281370506",
      appId: "1:538281370506:web:ba10cfaa70750c708d5e73",
      measurementId: "G-P4WJ2LL4W7",
      databaseURL: "https://fir-test-by-ooy.firebaseio.com"
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
