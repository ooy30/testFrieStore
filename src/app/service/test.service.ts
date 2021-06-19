import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private angularFirestore:AngularFirestore) { }

  private dbPath = '/tutorials';

  // tutorialsRef: AngularFirestoreCollection<any> 

  loadData(){
    this.angularFirestore.collection('Employee').get()
  }

  // getAll(): AngularFirestoreCollection<any> {
  //   return this.tutorialsRef;
  // }

}
