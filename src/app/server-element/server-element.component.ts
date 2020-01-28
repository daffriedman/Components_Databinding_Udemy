import { Component, OnInit, Input, ViewEncapsulation, OnChanges,DoCheck, AfterContentInit } from '@angular/core';
//added here encapsulation:ViewEncapsulation
// I didn't add it it will allow css 
//applied here to be global if set to none
//the default is emulated,there is also native

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  
})
export class ServerElementComponent implements OnInit {
//this allows any parent element hosting our element through a selector to bind to this property
 // @Input()element: {type:string, name:string, content:string };
//assigning a alias
@Input('srvElement')element: {type:string, name:string, content:string };  
  constructor() { 
    console.log("constructor called");
    
  }

  ngOnInit() {
    console.log("ngonit called");
    
  }
  ngOnChanges(){
console.log("ngonchanges called");

  }
  ngDoCheck(){
    console.log("calling the ngdocheck");
    
  }
  ngAfterContentInit(){
    console.log("using th afterinit");
    
  }

}
