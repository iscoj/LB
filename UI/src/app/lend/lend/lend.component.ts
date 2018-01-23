import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-lend-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.scss']
})
export class LendLendComponent implements OnInit {

  constructor(service: GlobalService) {
    
  }

  ngOnInit() {
  }

}
