import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from'@angular/forms';
import{AngularFireModule } from'@angular/fire';
import{AngularFirestoreModule, FirestoreSettingsToken} from'@angular/fire/firestore';
import{AngularFireAuthModule} from'@angular/fire/auth';
import{AngularFireStorageModule} from'@angular/fire/storage'; 
import{BrowserAnimationsModule} from'@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    GoodsComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCGsZEm1L50nyFftvIyVWkfkJ-_QY4OHuk",
      authDomain: "market-33545.firebaseapp.com",
      databaseURL: "https://market-33545.firebaseio.com",
      projectId: "market-33545",
      storageBucket: "market-33545.appspot.com",
      messagingSenderId: "184687411182",
      appId: "1:184687411182:web:a62c4b6e4543d5ff0458ff",
      measurementId: "G-BLYZ0XDS0Q"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: FirestoreSettingsToken, useValue:{} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
