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
  
  <app-input [contador] = "addValue" ></app-input>
  <br>
  <button (click)="add()">Adiconar</button>

  <app-output (enviarDados)="setDados($event)"></app-output>
  <ng-template [ngIf]="getDados">
  <h1>{{getDados.nome}} - {{getDados.idade}}</h1>
  </ng-template>

  <app-food-list></app-food-list>
  `
})

export class AppComponent implements OnInit {
  
  public addValue: number = 0;
  
  public getDados: {nome: string, idade: number} | undefined;

  constructor(){
  }

  ngOnInit(): void {}

    public add(){
      this.addValue += 1;
    }

    public setDados(event: {nome: string, idade: number}){
      this.getDados = event;
    }
}

