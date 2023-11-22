import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as datewand from 'date-fns';
@Component({
  selector: 'app-dateslider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dateslider.component.html',
  styleUrl: './dateslider.component.css',
})
export class DatesliderComponent implements OnInit {
  dates: Date[];
  datescardinfo: any;
  weekdays: string[];
  months: string[];
  toDisplay: number;
  constructor() {
    this.dates = [];
    this.datescardinfo = [];
    this.weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    this.months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    this.toDisplay = 0;
  }
  ngOnInit(): void {
    const current = new Date();
    for (let k = 0; k < 4; k++) {
      const ob = [];
      for (let i = 0; i < 5; i++) {
        const tp = datewand.add(current, { days: 5 * k + i });
        this.dates.push(tp);
        const d = datewand.getDate(tp);
        const w = this.weekdays[datewand.getDay(tp)];
        const m = this.months[datewand.getMonth(tp)];
        ob.push({ date: d, week: w, month: m });
      }
      this.datescardinfo.push(ob);
    }
  }
  first() {
    const e = document.querySelectorAll<HTMLElement>('.datebox')[0];
    e.style.color = 'white';
    e.style.backgroundColor = 'rgb(16, 145, 197)';
  }
  changedates(n: number) {
    if (n == 1) {
      if (this.toDisplay != 3) this.toDisplay++;
    } else {
      if (this.toDisplay != 0) this.toDisplay--;
    }
  }
  clean() {
    document.querySelectorAll<HTMLElement>('.datebox').forEach((elem) => {
      elem.style.backgroundColor = 'white';
      elem.style.color = 'rgb(16, 145, 197)';
    });
  }
  dateselected(e: any) {
    this.clean();
    const st = e.target.id;
    const ob = this.datescardinfo[st[1]][st[0]];
    e.target.style.backgroundColor = 'rgb(16, 145, 197)';
    e.target.style.color = 'white';
  }
}
