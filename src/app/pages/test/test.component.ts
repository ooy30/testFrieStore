import { Component, OnInit, ViewChild, Input, Output, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  
  constructor() { 
    faster:FormGroup;
  }

  ngOnInit(): void {
    console.log('test');
  }

}
