
import { Component,EventEmitter,Input,Output,NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ ChildViewComponent ],
  bootstrap: [ ChildViewComponent ]
})

@Component({
  selector: 'app-child-view',
  template:  `<h3>Child Component</h3>

<div class="parent-data">
	Data from parent view : <b>{{ incomingData }}</b>
</div>

<div class="child-data">
	<input type="text" class="form-control" 
		value="{{ childSampleData }}" 
		[(ngModel)]='childSampleData' 
		(ngModelChange)="sendData($event)" 
		placeholder="write some thing to send parent component">
</div> `,
})
export class ChildViewComponent {

	@Input('parentData') incomingData: string;

	@Output('childData') outgoingData = new EventEmitter<string>();

	childSampleData :string = "Some child Data";

	constructor() { }

	public sendData(data:any){
		this.outgoingData.emit(data);
	}
}
