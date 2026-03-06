import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Quality } from './quality/quality';
import { FoodHeader } from './Food/food-header/food-header'
import { FoodAdd } from './Food/food-add/food-add'
import { FoodList } from './Food/food-list/food-list'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menu,Quality,FoodHeader,FoodAdd,FoodList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ERP');
}
