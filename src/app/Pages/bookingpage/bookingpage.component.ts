import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesliderComponent } from '../../Components/dateslider/dateslider.component';
import { TheatercardComponent } from '../../Components/theatercard/theatercard.component';
import { Localtheaters, Localmovies } from '../../../assets/localdata';
import { SeatchoiceComponent } from '../../Components/seatchoice/seatchoice.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bookingpage',
  standalone: true,
  imports: [
    CommonModule,
    DatesliderComponent,
    TheatercardComponent,
    SeatchoiceComponent,
  ],
  templateUrl: './bookingpage.component.html',
  styleUrl: './bookingpage.component.css',
})
export class BookingpageComponent implements OnInit {
  moviedata: any;
  seatstobechosed: number;
  seatlayout: boolean;
  theaterdata = Localtheaters;
  constructor(private route: ActivatedRoute) {
    this.seatlayout = false;
  }
  ngOnInit(): void {
    let title = '';
    this.route.paramMap.subscribe((params) => {
      title = params.get('Title') || '';
    });
    this.moviedata =
      Localmovies[Localmovies.findIndex((m) => m.Title == title)];
  }
  showseatlayout(input: number) {
    this.seatstobechosed = input;
    this.seatlayout = !this.seatlayout;
  }
}
