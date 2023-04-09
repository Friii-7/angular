import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { subscribeOn } from "rxjs";
import { Empleado } from "./empleados.model";

@Injectable()
export class DataServices{

  constructor(private httpClient:HttpClient){}

  cargarEmpleados(){
    return this.httpClient.get('https://mis-cliente-f0191-default-rtdb.europe-west1.firebasedatabase.app/datos.json')
  }

  guardarEmpleados(empleados:Empleado[]){

    this.httpClient.put('https://mis-cliente-f0191-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
      Response=>console.log('Se han guardados empleados'+ Response),
      error=>console.log('Error'+ error)
      );
  }

  actualizarEmpleado(indice:number,empleado:Empleado){
    let url='https://mis-cliente-f0191-default-rtdb.europe-west1.firebasedatabase.app/datos.json' + indice + 'json';

    this.httpClient.put(url,empleado).subscribe(
      Response=>console.log('Se han guardados empleados'+ Response),
      error=>console.log('Error'+ error)
      );
  }

}
