import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.css']
})
export class SubNgIfComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('SubNgIfComponent');
    
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    
  }

}
