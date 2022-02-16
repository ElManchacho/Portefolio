import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillService } from '../services/skill/skill.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  
  public skillsList:any

  private allSkillsSubscribtion: Subscription = new Subscription  ;

  constructor(private skillService:SkillService) { }
  

  ngOnInit(): void {
     this.allSkillsSubscribtion = this.skillService.getAllSkills().subscribe(res=>{
       console.log(res)
     })
  }

  ngOnDestroy(): void {
    this.allSkillsSubscribtion.unsubscribe()
  }

}
