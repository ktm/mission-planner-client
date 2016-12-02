import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {MapEntry} from "./map";

import 'rxjs/add/operator/toPromise';
import {MAPENTRIES} from "./mock-map";

@Injectable()
export class MapService {
  constructor(private http: Http) {}


  /*  getMap(id:number): Promise<MapEntry[]> {
      return this.http.get('resources/data/cars-large.json')
        .toPromise()
        .then(response => <MapEntry[]> response.json().data as MapEntry[])
        .catch(this.handleError);
    }
    */

  getMap(id:number): Promise<MapEntry[]> {
    return Promise.resolve(MAPENTRIES);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

