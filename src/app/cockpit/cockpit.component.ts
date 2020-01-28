import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //add the decorator and output() in order to send the data
  //out i.e emit it
 // you can add alias's just like by input's
 //used viewchild @ViewChild('serverContentInput) serverContentInput: ElementRef;
 //to get access to the the reference from the html
 //it will be a elmentref not a local ref get direct access to the DOM  
 @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  @Output()bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  //the onAddServer function is using a local reference need to 
  //add HTML.. into the constructor and get it as a value like below
  onAddServer(name:HTMLInputElement){
    console.log("calling the onAddServer",  this.newServerName,this.newServerContent);
    
this.serverCreated.emit({
  serverName: name.value,
  serverContent: this.newServerContent,
});
}
//the onAddBluePrint is using two way binding for the content and a loc
//ref for the name
  onAddBluePrint(name:HTMLInputElement){
    console.log("calling the onAddBluePrint()",  this.newServerName,this.newServerContent);
    
    this.bluePrintCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent,
    });
  }
  
}
