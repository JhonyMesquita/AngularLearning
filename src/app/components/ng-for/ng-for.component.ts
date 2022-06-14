import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nakamas: Array<string> = [
    'Luffy',
    'Zoro',
    'Nami',
    'Usopp',
    'Sanji',
    // 'Chopper',
    // 'Robin',
    // 'Franky',
    // 'Brook',
    // 'Jinbei',
    // 'Yamato'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
