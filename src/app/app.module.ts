import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent } from './app-component';

import {AgmCoreModule } from 'angular2-google-maps/core';

import {CheckboxModule} from 'primeng/primeng';
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {InputTextareaModule} from "primeng/components/inputtextarea/inputtextarea";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {ToolbarModule} from "primeng/components/toolbar/toolbar";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DialogModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

import { HeaderComponent } from './header/header.component';

import { MapEditorComponent } from './mission-editor/map-editor/map-editor.component';
import { PhaseGridComponent } from './mission-editor/phase-grid/phase-grid.component';
import {MenuModule} from "primeng/components/menu/menu";
import {Routes, RouterModule} from "@angular/router";
import {MissionEditorComponent} from "./mission-editor/mission-editor-component";
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";
import {HomeComponent} from "./home/home.component";
import {MissionTemplateComponent} from "./mission-template/mission-template.component";
import {MapComponent} from "./map/map.component";
import {ResourceComponent} from "./resource/resource.component";
import {ContextService} from "./service/ContextService";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Home' } },
  { path: 'mission', component: MissionEditorComponent, data: {title: 'Mission Editor' } },
  { path: 'mission-template', component: MissionTemplateComponent, data: {title: 'Mission Template' } },
  { path: 'map', component: MapComponent, data: {title: 'Maps' } },
  { path: 'resource', component: ResourceComponent, data: {title: 'Resources' } },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    MapEditorComponent,
    MissionEditorComponent,
    MissionTemplateComponent,
    PhaseGridComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    DialogModule,
    GMapModule,
    MenuModule,
    OverlayPanelModule,
    ToolbarModule,
    DataTableModule,
    PanelModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLyQi7QyL7kkKtwbt_hza514LkvHZUaTQ'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
