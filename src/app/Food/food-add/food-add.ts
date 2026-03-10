import { Component } from '@angular/core';

@Component({
  selector: 'app-food-add',
  imports: [],
  templateUrl: './food-add.html',
  styleUrl: './food-add.css',
})
export class FoodAdd {
  foodname = "unknown"
  foodprice = "0.0"

  display(name:string, price:string){
    this.foodname = name
    this.foodprice = price
    {

    
  }

}
}
