import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myexperience = [
    {
      name: "Dots",
      compLogo : "./assets/experience/dots.jpeg",
      from : "june-2019",
      to : "july-2019",
      duration : "2 months",
      aboutWork : ["My first company", "My first company", "My first company"],
      credential : "Address of file"
    },
    {
      name : "Upwork",
      compLogo : "./assets/experience/upwork.jpeg",
      from : "june-2019",
      to : "july-2019",
      duration : "2 months",
      aboutWork : ["My first company", "My first company", "My first company"],
      credential : "Address of file"
    },
    {
      name : "Impinge",
      compLogo : "./assets/experience/imping.jpeg",
      from : "june - 2019",
      to : "july - 2019",
      duration : "2 months",
      aboutWork : ["My first company", "My first company", "My first company"],
      credential : "Address of file"
    }
  ]
}
