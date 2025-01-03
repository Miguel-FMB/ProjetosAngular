import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//components
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent
  ]
})
export class SharedModule { }
