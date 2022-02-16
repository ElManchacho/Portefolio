import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/class/skills';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillCollection$: Observable<Skill[]>;
  
  private route:string="skills" 

  constructor(private firestore: Firestore) { 
    const collec = collection(firestore, this.route);
    this.skillCollection$ = collectionData(collec);
  }

  getAllSkills(){
    return this.skillCollection$
  }

}
