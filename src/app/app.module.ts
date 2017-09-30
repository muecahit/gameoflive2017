import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CellComponent} from './cell/cell.component';
import {MaterialModule} from './material/material.module';
import {HeaderComponent} from './header/header.component';
import {SettingsComponent} from './settings/settings.component';
import {CellBlockComponent} from './cell-block/cell-block.component';
import {CellManagerService} from './services/cell-manager.service';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    HeaderComponent,
    SettingsComponent,
    CellBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ColorPickerModule,
  ],
  providers: [CellManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
