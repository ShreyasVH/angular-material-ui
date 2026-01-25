import { Component } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkboxes.html',
    imports: [MatCheckboxModule]
})
export class Checkboxes { }
