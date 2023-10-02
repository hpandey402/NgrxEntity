import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {path:'', loadComponent:()=> import('./home/home.component').then(m=>m.HomeComponent)},
  {path:'books', component:BookComponent},
  {path:'foo', loadComponent:()=> import('./foo/foo.component').then(m=>m.FooComponent)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
