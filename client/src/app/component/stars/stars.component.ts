import { Component, OnInit, Input } from '@angular/core';
import { createArrayFrom } from 'src/app/utils/array';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  @Input() starsCount: Number;
  @Input() class: String;
  constructor() { }

  get stars(): Array<Number> {
    return createArrayFrom(this.starsCount);
  }
}
