import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template:"<p>Aqui iria empleado</p>",
   styleUrls: ['./empleado.component.css']
  // styles:["p{ background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre="Farzin";

  apellido="Jimenez";

  edad= 30;
  
  empresa="Enovel";

  // cambiaEmpresa(event:Event){
  //   this.empresa=(<HTMLInputElement>event.target).value;
  // }

  // getEdad(){
  //   return this.edad
  // }

  // llamaEmpresa(value:string){

  // }

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event:Event){
    // alert("El usuario se acaba de registrar");
    this.textoDeRegistro="El usuario se acaba registrar";
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this. textoDeRegistro="No hay nadie registrado";
    }
  }
  constructor(){}

  ngOnInit(): void {
    
  }
  
}
