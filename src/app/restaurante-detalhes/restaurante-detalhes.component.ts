import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';

@Component({
  selector: 'mt-restaurante-detalhes',
  templateUrl: './restaurante-detalhes.component.html',
  styleUrls: ['./restaurante-detalhes.component.css']
})
export class RestauranteDetalhesComponent implements OnInit {

  restaurant : Restaurant

  constructor(private restauranteService : RestaurantsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restaurantById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant);
  }

}
