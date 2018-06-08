import {Component} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-date-editor-cell',
    templateUrl: './date-picker.component.html',
})
export class BootstrapDatePickerComponent implements ICellEditorAngularComp {
    private params: any;

    public selectedDate: NgbDateStruct;

    agInit(params: any): void {
        this.params = params;
    }

    getValue(): any {
        return `${this.selectedDate.day}/${this.selectedDate.month}/${this.selectedDate.year}`;
    }

    isPopup(): boolean {
        return true;
    }

    onClick(date: NgbDateStruct) {
        this.selectedDate = date;
        this.params.api.stopEditing();
    }
}