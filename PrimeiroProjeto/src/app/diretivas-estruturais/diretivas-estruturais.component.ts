import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  //if
  public condition: boolean = true;
  public clickCondition: boolean = true;
  //for
  public list : Array <{nome: string, idade: number}> = [
    {nome: "Pedro Souza", idade: 20},
    {nome: "Felipe Barbugian", idade: 20},
    {nome: "Miguel Bastos", idade: 19}
  ];
  //switch
  public nome: string= "";


  constructor() { }

  ngOnInit(): void {
    //if
    setInterval(() => {
      if (this.condition){
        this.condition = false;
      } else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if (this.clickCondition){
      this.clickCondition = false;
    } else{
      this.clickCondition = true;
    }
  }
  
  //for
  public onClickAdd(){
    this.list.push ({nome: "Lucas Alves", idade: 21})
  }

  public onClickEvent(event: number){
    this.list.splice(event,1)
  }
}
