import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './modules/agenda/agenda.component';
import { CaixaComponent } from './modules/caixa/caixa.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"caixa",
    component: CaixaComponent
  },
  {
    path:"clientes",
    component: ClientesComponent
  },
  {
    path:"agenda",
    component: AgendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
