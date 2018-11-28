import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd).subscribe(
      (event: NavigationEnd) =>  ga('send', 'pageview', event.urlAfterRedirects));
  }

}

