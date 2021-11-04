import { FuncionarioRoutingModule } from './funcionario/funcionario-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    FuncionarioRoutingModule
  ]
})
export class AppRoutingModule { }
