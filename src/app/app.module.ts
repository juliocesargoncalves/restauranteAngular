import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component';
import { RestaurantsService} from './restaurantes/restaurants.service';
import { RestauranteDetalhesComponent } from './restaurante-detalhes/restaurante-detalhes.component';
import { MenuComponent } from './restaurante-detalhes/menu/menu.component';
import { CarinhoComprasComponent } from './restaurante-detalhes/carinho-compras/carinho-compras.component';
import { MenuItemComponent } from './restaurante-detalhes/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detalhes/reviews/reviews.component';
import { CarinhoComprasService } from './restaurante-detalhes/carinho-compras/carinho-compras.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestauranteDetalhesComponent,
    MenuComponent,
    CarinhoComprasComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ RestaurantsService, CarinhoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
