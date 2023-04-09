import { Component} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caractresticas-empleado-c',
  templateUrl: './caractresticas-empleado-c.component.html',
  styleUrls: ['./caractresticas-empleado-c.component.css']
})
export class CaractresticasEmpleadoCComponent {

  @Output() caractresticasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService){}

  agararCaracteristicas (value: string) {
    this.miServicio.mustrarMensaje(value);
    this.caractresticasEmpleados.emit(value);
  }

}
