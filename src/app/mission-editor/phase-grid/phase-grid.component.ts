import { Component, OnInit } from '@angular/core';
import {MapEntry} from "../../service/map/map";
import {MapService} from "../../service/map/map.service";

@Component({
  selector: 'app-phase-grid',
  templateUrl: './phase-grid.component.html',
  styleUrls: ['./phase-grid.component.css'],
  providers: [MapService]
})
export class PhaseGridComponent implements OnInit {
  entries: MapEntry[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getMap(0).then(entries => this.entries = entries);
  }
}
