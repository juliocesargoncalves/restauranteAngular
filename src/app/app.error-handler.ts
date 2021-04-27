
import {Response} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/observable/throw"


export class ErrorHandler{
  static handleError(error : Response | any){
    let errrorMessage : string;

    if(error instanceof Response){

      errrorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;

    }else{

      errrorMessage = error.toString();

    }

    console.log(errrorMessage);

    return Observable.throw(errrorMessage);
  }
}
