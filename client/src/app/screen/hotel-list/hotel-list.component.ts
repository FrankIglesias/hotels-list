import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { Hotel } from 'src/app/models/hotel.model';
import { createArrayFrom } from 'src/app/utils/array';
import { FormBuilder, FormGroup, FormControl, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  hotels: Array<Hotel> = [];
  hotelsFilter: FormGroup;
  hotelsSubscription = null;

  constructor(
    private hotelService: HotelServiceService,
    private formBuilder: FormBuilder
  ) {
    this.hotelsFilter = this.formBuilder.group({
      name: new FormControl(''),
      allStars: new FormControl(true),
      stars: this.createStarsFormArray()
    });
  }

  ngOnInit() {
    this.hotelSubscription = this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    })
  }

  ngOnDestroy(): void {
    this.hotelsSubscription.unsubscribe();
  }

  createStarsFormArray() {
    const stars = createArrayFrom(5).map(() => this.formBuilder.control(false));
    return this.formBuilder.array(stars);
  }

  get stars(): FormArray {
    return this.hotelsFilter.get('stars') as FormArray;
  }

  parseFilters() {
    return {
      ... this.hotelsFilter.value,
      stars:
        !this.hotelsFilter.value.allStars ?
          this.hotelsFilter.value.stars.map((checked, index) => checked ? 5 - index : null).filter(value => value)
          : []
    }
  }

  searchHotel() {
    const parsedFilters = this.parseFilters()
    this.hotelsSubscription = this.hotelService.getHotels(parsedFilters).subscribe(hotels => {
      this.hotels = hotels;
    })
  }


}
