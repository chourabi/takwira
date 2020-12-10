import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfeildComponent } from './addfeild/addfeild.component';
import { TerrainComponent } from './terrain/terrain.component';

const routes: Routes = [
  { path:"addfeild" , component:AddfeildComponent },
  { path:"all" , component:TerrainComponent },
  { path:"" , component:TerrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
