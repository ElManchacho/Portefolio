import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill:any={title:"Skill title",projects:[{name:"Project1",desc:"Desc",url:"https://domain.example.com"}]};
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
