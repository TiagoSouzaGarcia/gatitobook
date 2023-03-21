import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: 'animais',
    loadChildren:() => import('./animais/animais.module').then((m) =>m.AnimaisModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
