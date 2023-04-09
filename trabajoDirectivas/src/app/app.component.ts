import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro De Usuario';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: any[];

  constructor(){
    this.entradas =[
      {titulo:'payton cada dia mas phfdkslkjl;'},
      {titulo:'payton cada dia mas phfdkslkjl;'},
      {titulo:'payton cada dia mas phfdkslkjl;'},
      {titulo:'payton cada dia mas phfdkslkjl;'},
    ]
  }

  



  registrarUsuario(){

    this.registrado=true;

    this.mensaje="usuario registrado con exito"
  }
}
