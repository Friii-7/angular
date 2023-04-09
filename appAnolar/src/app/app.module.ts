import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadposComponent } from './empleados/empleados.componont';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent ,EmpleadposComponent, EmpleadoComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
