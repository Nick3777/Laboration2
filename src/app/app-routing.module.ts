import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './co/input/input.component';
import { DefaultComponent } from "./co/default/default.component";

const routes: Routes = [
  { path: 'login', component: InputComponent },
  { path: '', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
