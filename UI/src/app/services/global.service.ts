import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';

@Injectable()
export class GlobalService {
  router: Router;
  constructor(router: Router, activedRoute: ActivatedRoute) {
    this.router = router;
  
    //this.router.events.subscribe((event) => {
    //  if (event instanceof NavigationEnd) {

    //    var data = [];
    //    var rt = activedRoute;
    //    while (rt.firstChild) {
    //      rt = rt.firstChild;
    //      //data.push(rt.snapshot._routerState);
    //    }
    //    console.log(data);
      
    //  }
    //});
  }
}
