import { Component } from '@angular/core';
import { FoodCard } from '../food-card/food-card'

@Component({
  selector: 'app-food-list',
  imports: [FoodCard],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})
export class FoodList {}
