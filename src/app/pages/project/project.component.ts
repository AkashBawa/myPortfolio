import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects = [
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/healthcrum2.jpg'
    },
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/quiz.jpg'
    },
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/tourism.jpg'
    },
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/healthcrum2.jpg'
    },
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/quiz.jpg'
    },
    {
      name : "Tourism",
      uses : "MEAN Stack",
      title : "Book you tour plan",
      about : ["User can book there travelling plan according to their wish",
                "Proper sign up and login for user authentication"],
      photo : './assets/projects/tourism.jpg'
    }
  ]
}
