import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './screen/hotel-list/hotel-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { StarsComponent } from './component/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    NavbarComponent,
    HotelComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
