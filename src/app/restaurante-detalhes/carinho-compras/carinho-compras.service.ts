import { MenuItem } from "../menu-item/menu-item.model";
import { CarinhoItem } from "./carinho-item.model";

export class CarinhoComprasService{

  constructor(){}

  items : CarinhoItem[]

  cleaer(){
    this.items = [];
  }

  addItem(item : MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

    if(foundItem){

      foundItem.qntde += 1;

    }else{
      this.items.push(new CarinhoItem(item));
    }
  }

  removeItem(item : any){
    this.items.splice(this.items.indexOf(item), 1);
  }

  total() : number{
    return this.items.map(item => item.value())
                     .reduce((prev , value) => prev + value, 1);
  }
}
