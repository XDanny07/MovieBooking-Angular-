import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Localmovies } from '../../../assets/localdata';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeatsComponent } from '../../Components/seats/seats.component';

@Component({
  selector: 'app-moviedetail',
  standalone: true,
  imports: [CommonModule, SeatsComponent, RouterLink],
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css',
})
export class MoviedetailComponent implements OnInit {
  data: any;
  movietitle: string;
  watchtrailer: boolean;
  constructor(private route: ActivatedRoute) {
    this.watchtrailer = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.movietitle = params.get('Title') || '';
    });
    this.data =
      Localmovies[
        Localmovies.findIndex((obj) => obj.Title === this.movietitle)
      ];
  }

  watch() {
    this.watchtrailer = !this.watchtrailer;
  }
  clear() {
    this.watchtrailer = false;
  }
}
