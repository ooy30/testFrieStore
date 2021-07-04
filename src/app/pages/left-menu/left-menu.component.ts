import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  max = document.documentElement.scrollHeight;
  showFiller = true;
  public loading=false;
  constructor() { }

  ngOnInit(): void {
  }

}
