import { Component } from '@angular/core';
import {IconButtons} from "./icon-buttons/icon-buttons";
import {OutlinedButtons} from "./outlined-buttons/outlined-buttons";
import {TextButtons} from "./text-buttons/text-buttons";
import {ContainedButtons} from "./contained-buttons/contained-buttons";

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.html',
    imports: [
        IconButtons,
        OutlinedButtons,
        TextButtons,
        ContainedButtons
    ]
})
export class Buttons { }
