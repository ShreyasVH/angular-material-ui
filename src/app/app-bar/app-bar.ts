import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Tabs } from '../tabs/tabs';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector'

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.html',
  styleUrls: ['./app-bar.css'],
  imports: [
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      Tabs,
      ThemeSelectorComponent
  ]
})
export class AppBar { }
