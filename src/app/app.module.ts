import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { commonService } from './core/services/common.services';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelBookComponent } from './components/hotel/hotel-book/hotel-book.component';
import { DestinationComponent } from './components/destination/destination.component';
import { FlightComponent } from './components/flight/flight.component';
import { CarComponent } from './components/car/car.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    HotelComponent,
    HotelBookComponent,
    DestinationComponent,
    FlightComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [commonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
