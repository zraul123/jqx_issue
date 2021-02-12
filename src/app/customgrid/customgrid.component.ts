import { Component, OnInit } from '@angular/core';
import { CustomColumn } from '../jqxgrid/custom-column.component';

@Component({
  selector: 'app-customgrid',
  templateUrl: './customgrid.component.html',
  styleUrls: ['./customgrid.component.scss']
})
export class CustomgridComponent implements OnInit {

  dataSource: any = [
    {
      name: 'name1'
    }
  ];
    
  columns: CustomColumn[] = [
    { id: 'name', width: '80%', label: 'Name', dataField: 'name', dataType: 'string' },
  ];

  constructor()
  { }

  ngOnInit(): void 
  { }
}
