import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; // OPERADOR MAP PARA HTTP 


@Injectable()
export class ServicioService {
    frutas:any={};
    query :string =`http://localhost:9999/api/frutas`;


    constructor ( private _http:Http){}

    obtenerFrutas():any{
          return this._http.get(this.query).map(res =>{
                      console.log(res.json());
                    return  this.frutas= res.json();
          })
    }
}
