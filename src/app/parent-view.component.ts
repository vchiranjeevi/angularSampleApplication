import { Component,NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ChildViewComponent } from './child-view.component';
@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ ParentViewComponent,ChildViewComponent ],
  bootstrap: [ ParentViewComponent ]
})

@Component({
  selector: 'app-parent-view',
  template:  `
    <div class="container parent-view">
    	<div class="">
    
    		<h3>Parent Component</h3>
    
    			<input type="text" class="form-control" value="{{ sampleData }}" [(ngModel)]='sampleData'>
    
    			<br>
    
    			<p>Data from child component : <b>{{ sampleChildData }}</b></p>
    		<hr>
    		
    		<div class="child-view">
    			<app-child-view [parentData]="sampleData" (childData)='handleEvent($event)'>app-child-view</app-child-view>
    		</div>
    		
    	</div>
    </div>
    
		<br/>
		<div class="resource-provider">Find more cool stuff at <a href="http://www.codershood.info/">www.codershood.info</a></div>
  `
})
export class ParentViewComponent {

	sampleData : string ="some parent Data";

	sampleChildData : string = '';

	constructor(){}

	public handleEvent(childData:any){
		this.sampleChildData = childData;
	}
}