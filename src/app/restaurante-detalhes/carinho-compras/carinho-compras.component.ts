import { Component, OnInit } from '@angular/core';
import { CarinhoComprasService } from './carinho-compras.service';

@Component({
  selector: 'mt-carinho-compras',
  templateUrl: './carinho-compras.component.html',
  styleUrls: ['./carinho-compras.component.css']
})
export class CarinhoComprasComponent implements OnInit {

  constructor(private carinhoService : CarinhoComprasService) { }

  ngOnInit() {
  }

  items():any[] {
    return this.carinhoService.items;
  }

  total():number{
    return this.carinhoService.total();
  }

  clear(){
    this.carinhoService.clear();
  }

  removeItem(item : any){
    this.carinhoService.removeItem(item);
  }

  addItem(item:any){
    this.carinhoService.addItem(item);
  }

}
