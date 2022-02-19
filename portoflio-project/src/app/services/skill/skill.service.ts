import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/class/skills';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillCollection: Observable<Skill[]>;
  
  private route:string="skills" 

  constructor(private firestore: Firestore) { 
    const collec = collection(firestore, this.route);
    this.skillCollection = collectionData(collec);
  }

  getAllSkills(){
    return this.skillCollection
  }

}


/*

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/class/skills';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, CollectionReference } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillCollection: AngularFirestoreCollection<Skill>;
  
  private route:string="skills"

  constructor(private store: AngularFirestore) { 
    this.skillCollection = this.store.collection<Skill>(this.route);
  }

  getAllSkills(){
    return this.skillCollection
  }

  getSkill(idToGet:string){
    return this.postCollection.doc<Post>(idToGet).valueChanges();
  }

}



*/