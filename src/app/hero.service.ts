import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  getApp(): string { 
    return "Hello world from hero service"; 
 } 

}