import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  searchValue: string = '';
  listBeer: any[] = [];

  constructor(private apiService: ApiService) { }

  /**
   * Event when user chenge the search, set the search value and call to the api service
   * @param {string} value
   */
  handleSearch(value: string) {
    this.searchValue = value;
    this.searchByAllParameters();
  }

  /**
   * Call to all api with all parameters
   */
  searchByAllParameters(): void {
    const params = ['beer_name', 'malt', 'food', 'hops'];

    const calls = params.map(param => {
      return this.apiService.searchByParam(param, this.searchValue);
    });

    Promise.all(calls).then((values) => {
      const data = values.flat();
      const dataFilter = data.filter(({ id }, index) => !data.map(({ id }) => id).includes(id, index + 1));
      this.listBeer = dataFilter;
    });
  }
}
