import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoServicie } from '../empleado.service';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {


  constructor(private router:Router, private miservicio:ServicioEmpleadosService, private empleadosService:EmpleadoServicie){}

  empleados:Empleado[]=[];

  ngOnInit(): void {

  }

  volverHome(){


    this.router.navigate(['contactos']);
  }
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    // this.miservicio.mustrarMensaje("nombre del empleado: " + miEmpleado.nombre)

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);

    }

    cuadroNombre:string="";
    cuadroApellido:string="";
    cuadroCargo:string="";
    cuadroSalario:number=0;
    };




