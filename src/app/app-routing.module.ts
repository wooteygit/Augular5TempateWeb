import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path: '', component: HeaderComponent 
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
