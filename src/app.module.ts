import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app/app.component';
import { AppBarComponent } from './app/app-bar/app-bar.component';
import { TabsComponent } from './app/tabs/tabs.component';
import { ButtonsComponent } from './app/buttons/buttons.component';
import { TextButtonsComponent } from './app/buttons/text-buttons/text-buttons.component';
import { ContainedButtonsComponent } from './app/buttons/contained-buttons/contained-buttons.component';
import { OutlinedButtonsComponent } from './app/buttons/outlined-buttons/outlined-buttons.component';
import { IconButtonsComponent } from './app/buttons/icon-buttons/icon-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxesComponent } from './app/checkboxes/checkboxes.component';
import { TableComponent } from './app/table/table.component';
import { LoaderComponent } from './app/loader/loader.component';
import { LoaderDialogComponent } from './app/loader/loader-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    TabsComponent,
    ButtonsComponent,
    TextButtonsComponent,
    ContainedButtonsComponent,
    OutlinedButtonsComponent,
    IconButtonsComponent,
    CheckboxesComponent,
    TableComponent,
    LoaderComponent,
    LoaderDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
