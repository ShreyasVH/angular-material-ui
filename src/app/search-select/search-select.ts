import { Component, Input } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-search-select',
    templateUrl: './search-select.html',
    styleUrls: ['./search-select.css'],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        CommonModule
    ]
})
export default class SearchSelect {
    search: string = '';
    open: boolean = false;
    options: Array<any> = [];

    @Input() onSelect!: (event: any, item: any) => void

    async searchItems  (keyword:string) {
        let choices: Array<any> = [];
        if (keyword.length === 2) {
            choices = [
                'Apple',
                'Orange'
            ];
        } else if (keyword.length === 3) {
            choices = [
                'Banana',
                'Grapes'
            ];
        } else if (keyword.length === 4) {
            choices = [
                'Pomegranate'
            ];
        }

        return choices;
    }

    async handleChange (event:any)  {
        event.preventDefault();

        console.log(event.target.value);

        const keyword = event.target.value;
        if (keyword.length >= 2) {
            this.options = await this.searchItems(keyword);
            this.open = true;
        }
        this.search = keyword;
    }

    handleSelect (event:any, item:any) {
        console.log(item);
        this.onSelect && this.onSelect(event, item);
        this.open = false;
        this.search = '';
        this.options = [];
    };

}
