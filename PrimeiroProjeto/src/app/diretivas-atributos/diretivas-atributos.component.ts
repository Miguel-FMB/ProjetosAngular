import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  
  //ngClass
  public valor: boolean = true;
  
  //NgModel
  public nome: string = "";
  public list: Array <{ nome: string }> = []; 

  public date: Date = new Date( );

  constructor() { }

  ngOnInit(): void {

    //ngClass
    setInterval(() => {
    
      if(this.valor){
        this.valor = false;
      }else{
        this.valor = true;
      }
    }, 2000);

  }

  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = ""
  }
}



