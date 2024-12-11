import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <app-title></app-title>`
})

export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor(){
  }

  ngOnInit(): void {
    console.log("Olá")
  }

  ngDoCheck(): void {}
  
  ngAfterContentInit(): void {}

  ngAfterContentChecked(): void {}

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {}
}
