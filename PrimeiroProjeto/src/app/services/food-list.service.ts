import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodlist } from '../module/foodlist';

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


  constructor(private http: HttpClient) { }

  // // public foodList(){
  // //   return this.list
  // // }

  public foodList(): Observable<Array<Foodlist>>{
    return this.http.get<Array<Foodlist>>(`${this.url}listFood`).pipe(
      res => res,
      error => error  
    );
  }

  // public addItemList(value:string){
  //   this.emitEvent.emit(value);
  //   this.list.push(value);
  // }

  public addItemList(value:string): Observable<Foodlist>{
     return this.http.post<Foodlist>(`${this.url}listFood`, {nome: value}) .pipe(
      res => res,
      error => error
     )
  }

  public addAlert(value: Foodlist){
    return this.emitEvent.emit(value);
 }
}
