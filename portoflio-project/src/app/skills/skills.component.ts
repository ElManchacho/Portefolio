import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillService } from '../services/skill/skill.service';
import { Observable, Subscription } from 'rxjs';
import { Skill } from 'src/class/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

  public skillsList : Skill[] = []

  private allSkillsSubscribtion: Subscription = new Subscription;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillsList = []
    this.skillService.test();/*
    this.allSkillsSubscribtion = this.skillService.getAllSkills().subscribe(skills=>{
      this.skillsList = skills
      skills.forEach(skill=>{
        console.log(skill)
      })
    })*/
  };

  ngOnDestroy(): void {
    this.allSkillsSubscribtion.unsubscribe()
  }

}
