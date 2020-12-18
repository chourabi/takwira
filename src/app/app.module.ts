import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { HttpClientModule } from '@angular/common/http';
import { AddfeildComponent } from './addfeild/addfeild.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { FielddetailComponent } from './fielddetail/fielddetail.component';
>>>>>>> e453985c1f4b1cd11801058f7adffb94febefdf1
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    AddfeildComponent,
    NavbarComponent,
<<<<<<< HEAD
=======
    FielddetailComponent,
>>>>>>> e453985c1f4b1cd11801058f7adffb94febefdf1
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
