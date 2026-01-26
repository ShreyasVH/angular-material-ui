import { Component } from '@angular/core';
import {AppBar} from "./app-bar/app-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
      AppBar
  ]
})
export class App { }
