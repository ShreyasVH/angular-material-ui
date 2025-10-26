import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})
export class TableComponent {
    columns: any = ['Country', 'Capital', 'Currency', 'Continent']
    data: any = [
        {
            country: 'India',
            capital: 'New Delhi',
            currency: 'Rupee',
            continent: 'Asia'
        },
        {
            country: 'United Kingdom',
            capital: 'London',
            currency: 'Pound',
            continent: 'Europe'
        }
    ]
}
