import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SiderbarComponent } from './core/siderbar/siderbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CaixaComponent } from './modules/caixa/caixa.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { AgendaComponent } from './modules/agenda/agenda.component';
import { TableClientesComponent } from './modules/clientes/components/table-clientes/table-clientes.component';
import { FormClientesComponent } from './modules/clientes/components/form-clientes/form-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderbarComponent,
    DashboardComponent,
    CaixaComponent,
    ClientesComponent,
    AgendaComponent,
    TableClientesComponent,
    FormClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
