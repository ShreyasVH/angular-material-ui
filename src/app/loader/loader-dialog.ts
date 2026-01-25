import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-loader-dialog',
    templateUrl: './loader-dialog.html',
    imports: [MatProgressSpinnerModule]
})
export class LoaderDialog {}
