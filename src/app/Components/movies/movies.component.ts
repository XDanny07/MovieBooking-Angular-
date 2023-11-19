import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviecardComponent } from '../moviecard/moviecard.component';
import { Localmovies } from '../../../assets/localdata';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MoviecardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  data = Localmovies;
  constructor() {}
}
