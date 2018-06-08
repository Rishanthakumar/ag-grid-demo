import {Component, ViewContainerRef, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular/main';

@Component({
    selector: 'app-type-ahead-cell',
    styleUrls: ['type-ahead.component.scss'],
    templateUrl: './type-ahead.component.html',
})
export class TypeAheadEditorComponent implements AgEditorComponent, AfterViewInit {

    @ViewChild('typeahead', {read: ViewContainerRef}) public container;

    private params: any;
    fruitName: string;
    fruits: any[] = [
        {
            id: 1,
            name: 'Apple',
            searchText: 'apple'
        },
        {
            id: 2,
            name: 'Orange',
            searchText: 'orange'
        },
        {
            id: 3,
            name: 'Banana',
            searchText: 'banana'
        }
    ];

    agInit(params: any): void {
        this.params = params;
    }

    getValue(): any {
        return this.fruitName;
    }

    isPopup(): boolean {
        return true;
    }

    ngAfterViewInit() {
        this.container.element.nativeElement.querySelector('.typeahead-input').focus();
    }

    public fruitSelected(fruit) {
        this.fruitName = fruit ? fruit.name : 'none';
    }
}