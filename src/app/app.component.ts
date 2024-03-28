import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavComponent} from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plant-e-electron';

  constructor(
    private rourer: Router,
  ) {}

  page(page: string){
    this.rourer.navigate([page]);
  }

}
