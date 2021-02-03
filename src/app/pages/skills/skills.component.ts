import { Component, OnInit } from '@angular/core';
import {skills} from '../../interface/basic'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mySkills : skills[] = [
        {name : "Angular", image : "../../../assets/skills/angular.png"},
        {name : "Git", image : "../../../assets/skills/git.png"},
        {name : "Javascript", image : "../../../assets/skills/javascript.png"},
        {name : "MongoDB", image : "../../../assets/skills/mongodb.png"},
        {name : "Node", image : "../../../assets/skills/node.png"},
        {name : "React", image : "../../../assets/skills/react.png"},
        {name : "SQL", image : "../../../assets/skills/sql.png"},
        {name : "JWT", image : "../../../assets/skills/jwt.png"},
      ]
}
