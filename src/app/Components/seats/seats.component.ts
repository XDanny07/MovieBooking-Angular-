import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css',
})
export class SeatsComponent {
  @Output() continue = new EventEmitter();
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  otaku: number;
  otakuarr: number[];
  constructor() {}

  seatselect(e: any) {
    this.otaku = e.target.value;
    this.clean();
    const elem =
      document.querySelectorAll<HTMLElement>('.noofseats button')[
        this.otaku - 1
      ];
    elem.style.color = 'white';
    elem.style.backgroundColor = 'black';
    this.addotaku(this.otaku);
    const cb = document.querySelector<HTMLElement>('.continuebook');
    cb?.attributes.removeNamedItem('disabled');
    if (cb) {
      cb.style.cursor = 'pointer';
    }
  }
  addotaku(x: number) {
    this.otakuarr = [];
    for (let i = 0; i < x; this.otakuarr.push(x), i++);
  }
  clean() {
    this.otakuarr = [];
    const elems = document.querySelectorAll<HTMLElement>('.noofseats button');
    elems.forEach((e) => {
      e.style.color = 'black';
      e.style.backgroundColor = 'white';
    });
    const cb = document.querySelector<HTMLElement>('.continuebook');
    cb?.setAttribute('disabled', '');
    if (cb) {
      cb.style.cursor = 'not-allowed';
    }
  }
  continuetobook() {
    this.continue.emit(this.otaku);
  }
}
