import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']

})
export class RestaurantesComponent implements OnInit {

  restaurants : Restaurant[]

  constructor(private restaurantService : RestaurantsService) {

  }

  ngOnInit() {

    this.restaurants = this.restaurantService.restaurantes();
  }



}
