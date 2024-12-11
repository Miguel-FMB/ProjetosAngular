import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  public title:string = "Bem Vindo";
  
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    console.log("O componente foi destruido");
  }
  }
