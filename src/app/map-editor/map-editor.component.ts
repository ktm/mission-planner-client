import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/components/common/api";

declare var google: any;

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css']
})
export class MapEditorComponent implements OnInit {
  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  msgs: Message[] = [];

  lat: number = 34.083204;
  lng: number =  -84.475523;
  zoom:number = 17;

  constructor() { }

  ngOnInit() {
    this.options = {
      center: {lat: this.lat, lng: this.lng},
      zoom: this.zoom
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }


  handleMapClick(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
    this.msgs = [];
    let isMarker = event.overlay.getTitle != undefined;

    if(isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.msgs.push({severity:'info', summary:'Marker Selected', detail: title});
    }
    else {
      this.msgs.push({severity:'info', summary:'Shape Selected', detail: ''});
    }
  }

  addMarker() {

    this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
    if(!this.overlays||!this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({position: {lat: this.lat, lng: this.lng}, title:"X Marks the Spot"}),
      ];
    }
  }

  zoomIn(map) {
    map.setZoom(map.getZoom()+1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom()-1);
  }

  clear() {
    this.overlays = [];
  }
}
