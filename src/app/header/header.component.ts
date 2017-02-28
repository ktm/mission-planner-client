import {Component, OnInit, Input} from '@angular/core';

import {MenuItem} from 'primeng/components/common/api';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {ContextService} from '../service/context.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {MetaStuff} from "../service/MetaStuff";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchtext: string;
  searchitems: MetaStuff[];

  selectedItem:MetaStuff;

  @Input() contextName: string;

  items: MenuItem[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public contextService: ContextService) {
  }


  ngOnInit() {
    this.searchtext = "x";

    this.searchitems = [
      {id: '1', label: 'Even', tag: 'even'},
      {id: '21', label: 'Even', tag: 'even'},
      {id: '13', label: 'Odd', tag: 'odd'},
      {id: '31', label: 'Odd', tag: 'odd'},
      {id: '5', label: 'Even', tag: 'even'},
      {id: '7', label: 'Even', tag: 'even'}
    ];

    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: ['home']},
      {label: 'Missions', icon: 'fa-star', routerLink: ['mission']},
      {label: 'Mission Templates', icon: 'fa-star-o', routerLink: ['mission-template']},
      {label: 'Maps', icon: 'fa-map', routerLink: ['map']},
      {label: 'Resources', icon: 'fa-car', routerLink: ['resource']},
      {label: 'Activities', icon: 'fa-cogs', routerLink: ['activity']}
    ];

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.contextService.setTitle(event['title']));
  }

  toggleFilter() {

  }
}
