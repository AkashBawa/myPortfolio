import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
 import * as AOS from 'AOS'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  // animations : [
  //   trigger('fade', [
  //      state(),
  //     transition('void => *', [
  //       style({ backgroundColor : "yellow", opacity : 0}),
  //       animate(20000)
  //     ])
  //   ])
  // ]
})
export class ExperienceComponent implements OnInit {


  constructor() { 
  }

  ngOnInit() {
   // AOS.init();
   
    this.onResize(event)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("width event")
    if(window.innerWidth < 768) {
      this.horizontal = false
    } else {
      this.horizontal = true
    }
  }
  horizontal : boolean = true;
 

  myexperience = [
    {
      name: "DOTS",
      compLogo : "./assets/experience/dots.jpeg",
      present : true,
      from : "May-2020",
      to : "",
      location : "Mohali, Punjab",
      duration : "2 months",
      credential : "https://internshala.com/student/certificate/34824057/82818E0C-8EAF-BC2A-4AA9-C437E5857CED",
      aboutWork : [
        "Worked on new emerging technology MEAN stack", 
        "Build the live project called 'Healthcrum.com'",
        "Mr. Bhola Kumar is my project manager"],
      project : [`Created live project HealthCrum which basically act as an intermediate between 
        patient and the doctor with proper`, 
        `Utilize Node.js for backend and Angular 8 for frontend `
      ]
    },
    {
      name : "Impinge",
      compLogo : "./assets/experience/impinge.jpg",
      present : false,
      from : "june - 2019",
      to : "july - 2019",
      location : "Mohali, Punjab",
      duration : "2 months",
      credential : "./assets/impingCertificate.jpg",
      aboutWork : ["Impinge is well-established MNC and give opportunity to the interns to explor there skills",
       "Learn and explor basic to advance concept of MEAN stack",
        "Mr. Shubham was my mentor and who has a great experience in many MNC "],
      project : [`Build tourism project in which user can select his/her tour plan according 
                  to their wish and has proper login and signup page for authentication`]
    },
    {
      name : "Upwork",
      compLogo : "./assets/experience/upwork.jpeg",
      present : true,
      from : "Nov-2018",
      to : "",
      location : "Mohali, Punjab",
      duration : "2 months",
      aboutWork : ["Upwork is a freelencer website",
       "Meet different people from all over the world", 
       "Widen my horizon"],
      credential : "http://www.upwork.com/",
      project : [`Here worked on project of differnet categories dealing with web-development ,
      some machine learning and many more.`]
    }
  ]
  onCredential(index : number) {
    window.open(this.myexperience[index].credential)
  }
}
