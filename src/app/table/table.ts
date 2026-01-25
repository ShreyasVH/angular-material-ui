import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    imports: [MatTableModule]
})
export class Table {
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
