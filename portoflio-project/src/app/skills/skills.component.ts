import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  skillsList = [
    {title:"Skill 1",projects:[{name:"Project1",desc:"Desc",url:""}]},
    {title:"Skill 2",projects:[{name:"Project1",desc:"Desc",url:""}]},
    {title:"Skill 3",projects:[{name:"Project1",desc:"Desc",url:""}]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
