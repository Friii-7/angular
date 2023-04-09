import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosHijoCComponent } from './empleados-hijo-c/empleados-hijo-c.component';
import { CaractresticasEmpleadoCComponent } from './caractresticas-empleado-c/caractresticas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoServicie } from './empleado.service';
import { HomeComponenetComponent } from './home-componenet/home-componenet.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { NosotrosComponentComponent } from './nosotros-component/nosotros-component.component';
import { ContactosComponentComponent } from './contactos-component/contactos-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizaComponent } from './error-personaliza/error-personaliza.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {path:'', component:HomeComponenetComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'nosotros', component:NosotrosComponentComponent},
  {path:'contactos', component:ContactosComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'**', component:ErrorPersonalizaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosHijoCComponent,
    CaractresticasEmpleadoCComponent,
    HomeComponenetComponent,
    ProyectosComponentComponent,
    NosotrosComponentComponent,
    ContactosComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [ServicioEmpleadosService, EmpleadoServicie, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
