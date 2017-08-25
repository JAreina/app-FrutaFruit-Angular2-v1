import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../servicios/servicio.service";

@Component({
  selector: 'app-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.css']
})
export class MostradorComponent implements OnInit {
 frutas : any[]=[];


  constructor(private _servicio: ServicioService) { }

  ngOnInit() {
    this.obtenerFrutas();
  }
  obtenerFrutas(){
    return this._servicio.obtenerFrutas().subscribe((data:any )=>{
         this.frutas= data;
         console.log(this.frutas);
  })
  }


}
