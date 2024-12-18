import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<router-outlet></router-outlet>
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  `
})

export class AppComponent implements OnInit {
  
  constructor(){
  }

  ngOnInit(): void {}
  } 

