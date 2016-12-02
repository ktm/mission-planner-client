import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css']
})
export class MapEditorComponent implements OnInit {

  lat: number = 34.083204;
  lng: number =  -84.475523;
  zoom:number = 17;
  constructor() { }

  ngOnInit() {
  }

}
