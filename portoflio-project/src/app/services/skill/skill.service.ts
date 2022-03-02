import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/class/skills';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, getDocs, getFirestore } from "firebase/firestore";

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

  async test(){
    let skillList: Skill[] = []
    /*const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "skills"));
    querySnapshot.forEach(doc => {
      const data = doc.data() as Skill
      const id = doc.id
      skillList.push(<Skill>{ ...data, id: id })
    });*/
    return skillList
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