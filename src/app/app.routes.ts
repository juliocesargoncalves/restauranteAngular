import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./restaurante-detalhes/menu/menu.component";
import { RestauranteDetalhesComponent } from "./restaurante-detalhes/restaurante-detalhes.component";
import { ReviewsComponent } from "./restaurante-detalhes/reviews/reviews.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";

export const ROUTES : Routes = [

  { path:'', component : HomeComponent},
  { path : 'about',component : AboutComponent},
  { path : 'restaurantes', component : RestaurantesComponent},
  { path : 'restaurantes/:id', component : RestauranteDetalhesComponent,
    children : [
      {path : '', redirectTo : 'menu', pathMatch : 'full'},
      {path : 'menu', component : MenuComponent},
      {path : 'reviews', component : ReviewsComponent}
    ],
  }

]
