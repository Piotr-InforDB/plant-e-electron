import {Component, OnInit, NgZone} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
    imports: [
        RouterOutlet,
        CommonModule
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  public displayController = {
    linked: false,
  }

  constructor(
    private zone: NgZone,
  ) {}

  ngOnInit(){
    this.listenToUsb()
  }

  listenToUsb(){
    window.electronAPI.receiveDataFromElectron('display-controller-connected', (device: any) => {
      this.zone.run(() => {
        this.displayController.linked = true;
      })
    })
    window.electronAPI.receiveDataFromElectron('display-controller-disconnected', () => {
      this.zone.run(() => {
        this.displayController.linked = false;
      })
    })
  }

}
