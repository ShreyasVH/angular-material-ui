import { Component } from '@angular/core';
import {Loader} from "../loader/loader";
import {MatTabsModule} from "@angular/material/tabs";
import {Table} from "../table/table";
import {Checkboxes} from "../checkboxes/checkboxes";
import {Buttons} from "../buttons/buttons";
import {Chips} from "../chips/chips";
import { MyCard as Card } from "../card/card";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.html',
    imports: [Loader, MatTabsModule, Table, Checkboxes, Buttons, Chips, Card]
})
export class Tabs { }
