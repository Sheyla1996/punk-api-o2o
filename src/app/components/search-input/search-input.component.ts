import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {

    searchText = '';
    @Input() placeholder = 'Buscar';
    @Output() changedText = new EventEmitter<string>();

    /**
     * Event when user change the input
     * @param {Event} event Event from the input
     */
    handleChange(event: Event) {
      this.searchText = event.toString();
      this.changedText.emit(event.toString());
    }
}
