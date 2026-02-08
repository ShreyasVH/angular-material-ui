import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-card',
    templateUrl: './card.html',
    styleUrls: ['./card.css'],
    imports: [MatCardModule, MatButtonModule]
})
export class MyCard {

}
