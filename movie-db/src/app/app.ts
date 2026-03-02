import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tile } from './tile/tile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-db');
}
