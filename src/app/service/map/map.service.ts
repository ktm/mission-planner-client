import { Injectable } from '@angular/core';
import {MapEntry} from './map';

import 'rxjs/add/operator/toPromise';
import {MAPENTRIES} from './mock-map';

@Injectable()
export class MapService {
  constructor() {}


  /*  getMap(id:number): Promise<MapEntry[]> {
      return this.http.get('resources/data/cars-large.json')
        .toPromise()
        .then(response => <MapEntry[]> response.json().data as MapEntry[])
        .catch(this.handleError);
    }
    */

  getMap(id: number): Promise<MapEntry[]> {
    return Promise.resolve(MAPENTRIES);
  }
}

