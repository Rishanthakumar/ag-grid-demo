import {Component, ViewContainerRef, ViewChild, AfterViewInit} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular/main';
import {Observable} from 'rxjs';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'app-type-ahead-cell',
    styleUrls: ['type-ahead.component.scss'],
    templateUrl: './type-ahead.component.html',
    providers: [NgbTypeaheadConfig]
})
export class TypeAheadEditorComponent implements AgEditorComponent {

    @ViewChild('typeahead', {read: ViewContainerRef}) public container;

    states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    private params: any;
    selectedItem: string;

    constructor(config: NgbTypeaheadConfig) {
        // customize default values of typeaheads used by this component tree
        config.showHint = true;
    }

    agInit(params: any): void {
        this.params = params;
    }

    getValue(): any {
        return this.selectedItem;
    }

    isPopup(): boolean {
        return true;
    }

    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )
}
