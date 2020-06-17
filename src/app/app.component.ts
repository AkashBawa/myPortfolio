import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('project', {static : false}) public project : ElementRef;
  ngOnInit() {
   // this.moveToSpecificView()
  }
  public moveToSpecificView(){
    setTimeout(() => {
       // this.experience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        this.project.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
}

  title = 'clientSide';

}
