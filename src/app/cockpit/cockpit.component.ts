import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //add the decorator and output() in order to send the data
  //out i.e emit it
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  @Output()bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    console.log("calling the onAddServer",  this.newServerName,this.newServerContent);
    
this.serverCreated.emit({
  serverName: this.newServerName,
  serverContent: this.newServerContent,
});
}
  onAddBluePrint(){
    console.log("calling the onAddBluePrint()",  this.newServerName,this.newServerContent);
    
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
  
}
