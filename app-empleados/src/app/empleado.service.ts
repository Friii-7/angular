import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleados.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadoServicie{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataservice:DataServices){

  }

  setEmpleados(misEmpleados:Empleado[]){

    this.empleados=misEmpleados;
  }

    obtenerEmpleados(){

      return this.dataservice.cargarEmpleados();
    }

    empleados:Empleado[]=[];

   /* empleados:Empleado[]=[

        new Empleado("Farzin","jimenez","persidente", 7500),
        new Empleado("Daniel","Marquez","directora", 6500),
        new Empleado("Zaida","Briceno","Lider", 4500),
        new Empleado("Goodarz","Filsof","profe", 3500),
      ];
*/

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.mustrarMensaje('persona que va aguarar' + '\n' + empleado.nombre +'\n' + 'salario' + empleado.salario)

        this.empleados.push(empleado);
        this.dataservice.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
      let empleado:Empleado=this.empleados[indice];
      return empleado
    }
    acualizarEmpleado(indice:number, empleado:Empleado){
      let empleadoModificado=this.empleados[indice];

      empleadoModificado.nombre=empleado.nombre;
      empleadoModificado.apellido=empleado.apellido;
      empleadoModificado.cargo=empleado.cargo;
      empleadoModificado.salario=empleado.salario;


      this.acualizarEmpleado(indice,empleado);

    }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }
}
