import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Pizza",
    "Pastel",
    "Japa"
  ]

  public emitEvent = new EventEmitter
  private url: string = "http://localhost:3000/"


  constructor(private http:          ) { }

  // public foodList(){
  //   return this.list
  // }

  public foodList(){
    return;
  }

  public addItemList(value:string){
    this.emitEvent.emit(value);
    this.list.push(value);
  }
}
