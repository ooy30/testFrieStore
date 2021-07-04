import { Component, OnInit, ViewChild, Input, Output, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
