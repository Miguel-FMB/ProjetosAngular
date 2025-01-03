import { Component, EventEmitter, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array <string> = [];

  constructor(private foodService: FoodListService ) { }

  ngOnInit(): void {

  this.foodList = this.foodService.foodList();
  this.foodService.emitEvent.subscribe(
    res => alert (`A comida ${res} foi adicionado!`)
  );
  }

  public addItem(value:string){
    this.foodService.addItemList(value);
  }

}
