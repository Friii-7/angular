import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  mustrarMensaje(mensaje: string){
    alert(mensaje)
  }
}
