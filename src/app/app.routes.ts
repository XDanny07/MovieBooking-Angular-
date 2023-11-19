import { Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { MoviedetailComponent } from './Pages/moviedetail/moviedetail.component';
import { BookingpageComponent } from './Pages/bookingpage/bookingpage.component';
import { PaymentComponent } from './Components/payment/payment.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Movie/:Title', component: MoviedetailComponent },
  { path: 'Movie/Booking/:Title', component: BookingpageComponent },
  { path: 'Movie/Payment/:Title/:Amount/:Seats', component: PaymentComponent },
];
