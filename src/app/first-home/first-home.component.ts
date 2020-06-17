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

  ngOnInit() {

    const target = this.typewriterElement.nativeElement
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'White',
      typeSpeed: 500,
      deleteSpeed : 200
    })
    writer
      .type("Akash Bawa")
      .rest(2000)
      .start()
 }
}
