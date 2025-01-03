import { Component, EventEmitter, OnInit } from '@angular/core';
import { Foodlist } from 'src/app/module/foodlist';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<Foodlist> = [];

  constructor(private foodService: FoodListService ) { }

  ngOnInit(): void {

    this.foodService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    
    
    this.foodService.emitEvent.subscribe(
      res => {
        alert (`A comida ${res.nome} foi adicionado!`);
        return this.foodList.push(res);
      }
    );
  }

  public addItem(value:string){
    return this.foodService.addItemList(value).subscribe(
      res => this.foodService.addAlert(res),
      error => error
    ); 
  }

}
