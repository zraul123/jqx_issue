import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JqxgridComponent } from './jqxgrid/jqxgrid.component';
import { CustomgridComponent } from './customgrid/customgrid.component';
import { TableModule } from 'smart-webcomponents-angular/table';

@NgModule({
  declarations: [
    AppComponent,
    JqxgridComponent,
    CustomgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
