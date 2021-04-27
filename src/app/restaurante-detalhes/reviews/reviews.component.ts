import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<any>

  constructor(private restaurantesService : RestaurantsService, private router : ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantesService.reviewsOfRestaurant(this.router.parent.snapshot.params['id']);
  }

}
