import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  Title: string;
  Amount: string;
  Seats: any;
  Type: any;
  constructor(private route: ActivatedRoute) {
    this.Title = '';
    this.Amount = '';
    this.Seats = '';
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.Title = params.get('Title') || '';
      this.Amount = params.get('Amount') || '';
      this.Seats = params.get('Seats')?.split(',');
    });
    let ob = {
      Rec: [],
      Gold: [],
      Silver: [],
      R: 0,
      G: 0,
      S: 0,
      Tamount: Number(this.Amount) + 22,
    };
    ob.Rec = this.Seats.map((e: any) => {
      if (e[0] == 'A') ob.R++;
      return e[0] == 'A' ? e : '';
    });
    ob.Gold = this.Seats.map((e: any) => {
      if (e[0] >= 'B' && e[0] <= 'D') ob.G++;
      return e[0] >= 'B' && e[0] <= 'D' ? e : '';
    });
    ob.Silver = this.Seats.map((e: any) => {
      if (e[0] >= 'E') ob.S++;
      return e[0] >= 'E' ? e : '';
    });
    this.Type = ob;
  }
}
