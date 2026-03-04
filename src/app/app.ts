import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Quality } from './quality/quality';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menu,Quality],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ERP');
}
