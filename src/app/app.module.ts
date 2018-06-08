import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {BootstrapDatePickerComponent} from './date-picker/date-picker.component';
import {TypeAheadEditorComponent} from './type-ahead/type-ahead.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapDatePickerComponent,
    TypeAheadEditorComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([
      BootstrapDatePickerComponent,
      TypeAheadEditorComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
