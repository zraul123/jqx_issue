import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { TableColumn, TableColumnSizeMode, TableComponent } from 'smart-webcomponents-angular/table';
    
export interface TableRow {
     id: string;
    [property: string]: any;
}

@Component({
    selector: 'jqxgrid',
    templateUrl: './jqxgrid.component.html',
    styleUrls: ['./jqxgrid.component.scss']
})
export class JqxgridComponent implements AfterViewInit, OnDestroy {
    
    @Input() columns: TableColumn[] = [];
    
    @Input() dataSource: TableRow[] = [];
    
    // Commenting the next line solves the error
    @Input() selection = true;
    
    @Input() columnSizeMode: TableColumnSizeMode = 'default';
    
    @ViewChild('table', { read: TableComponent, static: false }) private table: TableComponent;
    
    ngAfterViewInit(): void {
    }
    
    ngOnDestroy(): void {
    }
    
}