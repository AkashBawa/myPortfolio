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
      name : "Health Crum",
      uses : "MEAN Stack",
      title : "Make treatment Easy",
      about : ["Middleware between doctors and the patient",
                "Features : doctor consultation, blood test any many more"],
      photo : './assets/projects/healthcrum.png'
    },
    {
      name : "Chatting app",
      uses : "Web sockets",
      title : "Chit chat",
      about : ["User can exchange text and video messages",
                "lastseen, typing, online features"],
      photo : './assets/projects/chatting.png'
    },
    {
      name : "Movie review",
      uses : "MEAN stack",
      title : "Rating your fav. movie",
      about : ["user can app comment and rate the movie "],
      photo : './assets/projects/movie.jpg'
    },
    {
      name : "Quiz",
      uses : "MEAN Stack",
      title : "Learn and compete",
      about : ["Participants can enrole and give test from home",
                  "Result send to the user mail after completion"],
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
