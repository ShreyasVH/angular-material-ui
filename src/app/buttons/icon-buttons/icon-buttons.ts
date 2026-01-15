import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-icon-buttons',
    templateUrl: './icon-buttons.html',
    imports: [MatIconModule, MatButtonModule]
})
export class IconButtons { }
