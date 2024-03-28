import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  public displayController = {
    linked: false,
  }

  linkDisplayController(){
    this.displayController.linked = true;
  }

}
