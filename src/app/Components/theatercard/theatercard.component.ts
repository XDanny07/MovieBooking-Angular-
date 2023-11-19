import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from '../seats/seats.component';

@Component({
  selector: 'app-theatercard',
  standalone: true,
  imports: [CommonModule, SeatsComponent],
  templateUrl: './theatercard.component.html',
  styleUrl: './theatercard.component.css',
})
export class TheatercardComponent {
  @Input() tdata: any;
  @Output() continue = new EventEmitter();
  continuebook(input: number) {
    this.continue.emit(input);
  }
}
