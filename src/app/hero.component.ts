import { Component } from '@angular/core';
import { 
    HeroService 
 } from './hero.service';

@Component({
  selector: 'my-app',
  template: '<div>{{value}}</div>',
  providers: [HeroService]
})
export class HeroComponent  { 
    value: string = ""; 
   constructor(private _heroService: HeroService) { }  

   ngOnInit(): void { 
      this.value = this._heroService.getApp(); 
   } 
}
