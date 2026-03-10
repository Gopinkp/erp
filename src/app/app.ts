import { Component, signal } from '@angular/core';
import { FoodHeader } from './Food/food-header/food-header'
import { FoodAdd } from './Food/food-add/food-add'
import { FoodList } from './Food/food-list/food-list'



@Component({
  selector: 'app-root',
  imports: [FoodHeader,FoodAdd,FoodList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ERP');
}
