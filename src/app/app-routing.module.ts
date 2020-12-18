import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfeildComponent } from './addfeild/addfeild.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { TerrainComponent } from './terrain/terrain.component';

const routes: Routes = [
  { path:"addfeild" , component:AddfeildComponent , canActivate:[AuthGuard] },
  { path:"all" , component:TerrainComponent , canActivate:[AuthGuard] },
  { path:"" , component:TerrainComponent , canActivate:[AuthGuard] },
  { path:"signin" , component:SigninComponent },
  { path:"contact" , component:ContactComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
