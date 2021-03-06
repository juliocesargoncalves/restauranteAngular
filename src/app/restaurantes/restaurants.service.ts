import { Restaurant } from "./restaurant/restaurant.model"
import { MEAT_API} from '../app.api';
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app/app.error-handler";
import { Injectable } from "@angular/core";
import { Observer } from "rxjs";
import { MenuItem } from "app/restaurante-detalhes/menu-item/menu-item.model";


@Injectable()
export class RestaurantsService{


  constructor(private http: Http){}

  restaurantes () : Observable<Restaurant[]> {
    return this.http.get(MEAT_API + '/restaurants')
                    .map(response => response.json())
                    .catch(ErrorHandler.handleError);
  }

  restaurantById(id:string) : Observable<Restaurant>{
    return this.http.get(MEAT_API + '/restaurants/' + id)
                    .map(response => response.json())
                    .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id : string) : Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
                    .map(response => response.json())
                    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id : string) : Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}`+'/restaurants/' + id +'/menu')
                    .map(response => response.json())
                    .catch(ErrorHandler.handleError);
  }
}
