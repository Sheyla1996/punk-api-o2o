import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'beer-item',
  templateUrl: './beer-item.component.html'
})
export class BeerItemComponent {

  @Input() beer: Beer | undefined;
  constructor() { }

}
