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
import { FielddetailComponent } from './fielddetail/fielddetail.component';
=======
import { SigninComponent } from './signin/signin.component';
>>>>>>> 5252b91c9747061a9f72c0172ef59618f9238786


@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    AddfeildComponent,
    NavbarComponent,
<<<<<<< HEAD
    FielddetailComponent
=======
    SigninComponent
>>>>>>> 5252b91c9747061a9f72c0172ef59618f9238786
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
