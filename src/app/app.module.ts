import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent } from './app.component';
import {AgmCoreModule } from 'angular2-google-maps/core';

import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {InputTextareaModule} from "primeng/components/inputtextarea/inputtextarea";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {ToolbarModule} from "primeng/components/toolbar/toolbar";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {PanelModule} from 'primeng/primeng';

import { HeaderComponent } from './header/header.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { PhaseGridComponent } from './phase-grid/phase-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapEditorComponent,
    PhaseGridComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToolbarModule,
    DataTableModule,
    PanelModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLyQi7QyL7kkKtwbt_hza514LkvHZUaTQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
