import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seatchoice',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seatchoice.component.html',
  styleUrl: './seatchoice.component.css',
})
export class SeatchoiceComponent {
  @Input() noofseats: number;
  @Input() moviedata: any;
  @Output() seatsselected: EventEmitter<string[]> = new EventEmitter();
  seatmap: number[];
  silvermap: string[];
  finalseats: string[];
  amount: number;
  constructor() {
    this.seatmap = [
      1, 2, 3, 4, 0, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 0, 0,
      19, 20, 21, 22, 23, 24,
    ];
    this.silvermap = ['E', 'F', 'G', 'H', 'I'];
    this.finalseats = [];
    this.amount = 0;
  }
  selected(e: any) {
    const elem = e.target;
    let v = elem.id + elem.children[0].innerText;
    let ind = this.finalseats.indexOf(v);
    if (ind == -1) {
      if (this.finalseats.length >= this.noofseats) {
        alert('Maximum Seats Selected');
      } else {
        if (elem.id == 'A') this.amount += 570;
        if (elem.id >= 'B' && elem.id <= 'D') this.amount += 300;
        if (elem.id >= 'E' && elem.id <= 'I') this.amount += 210;
        elem.style.color = 'white';
        elem.style.backgroundColor = ' rgb(7, 220, 7)';
        this.finalseats.push(v);
      }
    } else {
      if (elem.id == 'A') this.amount -= 570;
      if (elem.id >= 'B' && elem.id <= 'D') this.amount -= 300;
      if (elem.id >= 'E' && elem.id <= 'I') this.amount -= 210;
      elem.style.color = ' rgb(7, 220, 7)';
      elem.style.backgroundColor = 'white';
      this.finalseats.splice(ind, 1);
    }
    console.log(this.noofseats);
    this.seatsselected.emit(this.finalseats);
  }
}
