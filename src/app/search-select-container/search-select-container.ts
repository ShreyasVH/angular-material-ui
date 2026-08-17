import { Component } from '@angular/core';
import SearchSelect from '../search-select/search-select';

@Component({
    selector: 'app-search-select-container',
    templateUrl: './search-select-container.html',
    imports: [
        SearchSelect
    ]
})
export class SearchSelectContainer {
    selectedItem: string = '';

    handleSelect = (event:any, item: any) => {
        this.selectedItem = item;
    };

}
