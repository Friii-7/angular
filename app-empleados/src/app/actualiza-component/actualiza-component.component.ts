import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoServicie } from '../empleado.service';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {



  constructor(private router:Router,private route:ActivatedRoute, private miservicio:ServicioEmpleadosService, private empleadosService:EmpleadoServicie){}

  empleados:Empleado[]=[];

  accion:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados= this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  volverHome(){


    this.router.navigate(['contactos']);
  }
  // agregarEmpleado(){
  //   let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
  //   // this.miservicio.mustrarMensaje("nombre del empleado: " + miEmpleado.nombre)

  //   this.empleadosService.acualizarEmpleado(this.indice,miEmpleado);
  //   this.router.navigate(['']);

  //   }

  // eliminarEmpleado(){

  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   this.router.navigate(['']);

  // }

  actualizaEmpleado(){
    if(this.accion==1){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    this.empleadosService.acualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);
    }else{

    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);

    }
    }


    cuadroNombre:string="";
    cuadroApellido:string="";
    cuadroCargo:string="";
    cuadroSalario:number=0;
    indice:number;
}
