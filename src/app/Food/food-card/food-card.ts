import { Component } from '@angular/core';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css',
})
export class FoodCard {
  message = 'Welcome to angular food manager project';
  number = 100;
  array = [1, 2, 3, 4, 5];
  image = "nature.png"
  notfound = "not found"

get imageerror() {
  return this.notfound
}
  get imagePath() {
    return 'assets/'+ this.image
  }
  buttonclick(){
    this.message = "Button Clicked";
  
  }
}