import { Component } from '@angular/core';
import {AppBar} from "./app-bar/app-bar";
import {Tabs} from "./tabs/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
      AppBar,
      Tabs
  ]
})
export class App { }
