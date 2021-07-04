import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './pages/left-menu/left-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LeftMenuComponent
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
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    NgxLoadingModule


  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
  
 

