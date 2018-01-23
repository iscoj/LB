import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: Link[] = [];
  constructor(router: Router, activedRoute: ActivatedRoute) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        var data: Link[] = [];
        var rt = activedRoute;
        while (rt.firstChild) {
          rt = rt.firstChild;
          if (data.length == 0)
            data.push({ name: rt.snapshot.routeConfig.data.title, link: rt.snapshot.routeConfig.path });
          else
            data.push({ name: rt.snapshot.routeConfig.data.title, link: data[data.length - 1].link + '/' + rt.snapshot.routeConfig.path })
        }

        this.links = data;
      }
    });
  }
  ngOnInit() {
    
  }
}

interface Link {
  name: string
  link: string
}
