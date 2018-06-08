import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BootstrapDatePickerComponent} from './date-picker/date-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  columnDefs = [
    { headerName: 'Date', field: 'date', editable: true, cellEditorFramework: BootstrapDatePickerComponent},
    { headerName: 'Make', field: 'make', editable: true},
    { headerName: 'Model', field: 'model', editable: true },
    { headerName: 'Price', field: 'price', editable: true }
  ];

  rowData: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/12dbxm');
  }
}
