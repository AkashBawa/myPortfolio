import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('home', {static : false}) public home : ElementRef;
  @ViewChild('project', {static : false}) public project : ElementRef;
  @ViewChild('experience', {static : false}) public experience : ElementRef;
  @ViewChild('ability', {static : false}) public ability : ElementRef;
  @ViewChild('skills', {static : false}) public skills : ElementRef;
  @ViewChild('contactme', {static : false}) public contactme : ElementRef;
  ngOnInit() {
   // this.moveToSpecificView()
  }
  public moveToSpecificView(){
    setTimeout(() => {
       this.project.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
  }

  //@ViewChild(MainNavComponent, {static : false}) child

  ngAfterViewInit(): void {
    //console.log("from child", this.child.message)
  }
  receivemessage($event){
    console.log($event)
    if($event == "experience"){
     // console.log("experience ")
      setTimeout(() => {
        this.experience.nativeElement.scrollIntoView({behavior: 'smooth',  inline: 'start' });
      });
    } else if($event == "home"){
      setTimeout(() => {
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
     });
    } else if($event == "project") {
      setTimeout(() => {
        this.project.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
     });
    } else if($event == "ability") {
      setTimeout(() => {
        this.ability.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
     });
    } else if($event == "skills") {
      setTimeout(() => {
        this.skills.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
     }); 
    }else if($event == "contactme") {
      setTimeout(() => {
        this.contactme.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
     });
    }
  }
  title = 'clientSide';
}
