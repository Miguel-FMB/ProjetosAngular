import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<router-outlet></router-outlet>
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  
  <app-diretivas-atributos>
    <h1>Inicio da aula de Diretivas-Atributos (ng-content)</h1>
    <hr>
  </app-diretivas-atributos>

  <app-header></app-header>

  `
})

export class AppComponent implements OnInit {
  
  constructor(){
  }

  ngOnInit(): void {}
  } 

