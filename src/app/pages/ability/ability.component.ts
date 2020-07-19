import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abilities = [
    {des : "I am able to code in angular, node and express js"},
    {des : "I am able to code in angular, node and express js"},
    {des : "I am able to code in angular, node and express js"},
    {des : "I am able to code in angular, node and express js"},
    {des : "I am able to code in angular, node and express js"},
  ]
}
