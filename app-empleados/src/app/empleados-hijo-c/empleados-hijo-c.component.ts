import { Component, Input } from '@angular/core';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-empleados-hijo-c',
  templateUrl: './empleados-hijo-c.component.html',
  styleUrls: ['./empleados-hijo-c.component.css']
})
export class EmpleadosHijoCComponent {
  @Input()empleadoDeLista:Empleado;

  @Input()indice:number;

  empleados:Empleado[]=[

    new Empleado("Farzin","jimenez","persidente", 7500),
    new Empleado("Daniel","Marquez","directora", 6500),
    new Empleado("Zaida","Briceno","Lider", 4500),
    new Empleado("Goodarz","Filsof","profe", 3500),
  ];

  empleadoAgrado(empleado: Empleado){
    this.empleados.push(empleado)
  }

 
    arrayCaracteristicas = [''];
  
    agregarCaractistica(nuevoCaractistica: string) {
      this.arrayCaracteristicas.push(nuevoCaractistica);
    }
  }

