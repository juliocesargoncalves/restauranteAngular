import { MenuItem } from "../menu-item/menu-item.model";

export class CarinhoItem{

  constructor(public  menuItem : MenuItem, public qntde : number = 1){}

  value(){
      return this.menuItem.price * this.qntde;
  }


}
