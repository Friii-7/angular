import { Component, OnInit} from '@angular/core';
import { EmpleadoServicie } from '../empleado.service';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-componenet',
  templateUrl: './home-componenet.component.html',
  styleUrls: ['./home-componenet.component.css']
})
export class HomeComponenetComponent implements OnInit{

  titulo = 'listado de Empleados';

  constructor(private miservicio:ServicioEmpleadosService, private empleadosService:EmpleadoServicie){
    // this.empleados = this.empleadosService.empleados;
}
  ngOnInit(): void {
    // this.empleados = this.empleadosService.empleados;

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);

    this.empleados=Object.values(misEmpleados);

    this.empleadosService.setEmpleados(this.empleados);
    });
  }

empleados:Empleado[]=[];


agregarEmpleado(){
let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
// this.miservicio.mustrarMensaje("nombre del empleado: " + miEmpleado.nombre)

this.empleadosService.agregarEmpleadoServicio(miEmpleado);

}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}


