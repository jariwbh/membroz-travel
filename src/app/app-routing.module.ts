import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContactComponent } from './components/contact/contact.component';
import { DestinationComponent } from './components/destination/destination.component';
import { FlightComponent } from './components/flight/flight.component';
import { HomeComponent } from './components/home/home.component';
import { HotelBookComponent } from './components/hotel/hotel-book/hotel-book.component';
import { HotelComponent } from './components/hotel/hotel.component';


const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'contact',component:ContactComponent},
  { path:'hotel',component:HotelComponent},
  { path:'hotel/:_id',component:HotelComponent},
  { path:'hotel/hotelbook/:_id',component:HotelBookComponent},
  { path:'destination',component:DestinationComponent},
  { path:'flight',component:FlightComponent},
  { path:'car',component:CarComponent}


 
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration:'top',
    useHash: true 
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
