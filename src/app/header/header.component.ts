import {Component, OnInit, Input} from '@angular/core';

import {MenuItem} from 'primeng/components/common/api';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {ContextService} from '../service/ContextService';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() contextName: string;

  items: MenuItem[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public contextService: ContextService) {
  }


  ngOnInit() {
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
}
