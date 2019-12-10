import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { createArrayFrom } from 'src/app/utils/array';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  @Input() hotel: Hotel;
  constructor() { }
  get stars() {
    return createArrayFrom(this.hotel.stars)
  }
}
