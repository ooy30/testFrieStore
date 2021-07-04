import { Component, OnInit, ViewChild, Input, Output, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title = 'testFrieStore';
  listData :any =[];
  listDataSelect :any =[];
  displayedColumns: string[] = ['name', 'age','action','update'];
  name:string | undefined;
  age:number | undefined;
  constructor(private angularFirestore:AngularFirestore,
    private leftMenuComponent:LeftMenuComponent) { 
    
  }

  ngOnInit(): void {
    
    this.getData();
  }
  getData(){
    this.angularFirestore.collection('Employee').get().pipe().subscribe(data => {
      this.listData =data.docs;
     data.docs.forEach(element => {
      console.log(element.data());
       console.log(element.id);
     });
      
    });
    this.leftMenuComponent.loading = true;
    this.angularFirestore.collection('Employee').get().pipe().subscribe(data => {
      this.leftMenuComponent.loading = false;
      this.listDataSelect =data.docs;
    });
  }
  addData(){
    this.leftMenuComponent.loading = true;
    this.angularFirestore.collection('Employee').add({
      name :this.name,
      age : this.age
    }).then(data => {
      this.name = undefined;
      this.age = undefined;
      this.getData();
    });
  }
 
  updateData(id:string){
  
      this.angularFirestore.collection('Employee').doc(id).update({
        name :'test by Ooy'
      }).then(data => {
        this.getData();
      });
    
  }
   
  deleteData(id:string){
    this.angularFirestore.collection('Employee').doc(id).delete().then(data => {
      this.getData();
    });
    
  }
    
  
  

}
