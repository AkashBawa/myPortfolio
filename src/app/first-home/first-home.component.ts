import { Component, OnInit, ViewChild } from '@angular/core';
//import { TypewriterService, TypewriterContent } from "ng2-typewriter";
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.scss']
})

export class FirstHomeComponent implements OnInit {

  constructor() { }

  @ViewChild('name', {static : true}) typewriterElement;
  @ViewChild('aboutme', {static : true}) aboutme;

  ngOnInit() {

    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'White',
      typeSpeed: 250,
      deleteSpeed : 200
    })

    const target2 = this.aboutme.nativeElement;
    const writer2 = new Typewriter(target2, {
      loop : false,
      typeColor :'white',
      typeSpeed : 50,
    })
    writer
      .type("Meet Akash Bawa")
      //.rest(2000)
      //.then(writer2.start())
      .then(writer2.start.bind(writer2))
      .start()

    writer2
      .type(this.myDetail)
      //.rest(2000)
 }

 myDetail = `I am a student of B-tech CSE 3rd year. After discovering my passion for web development, I couldn’t get enough. I made websites for friends and family, interned with a local business, and hired myself out as a freelancer on upwork.
  I’m looking forward to bringing that passion to a full-time role.`
}