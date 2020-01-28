import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsAndDatabindingDeepDive';
 serverElements = [{type:'server', name:'testserver', content:'just a test from the app-root'}];
  
  onServerAdded(serverData:{
    serverName:string, serverContent:string
  }) {
    console.log("calling the onServerAdded in the app.ts");
    
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData:{
    serverName:string, serverContent:string
  }) {
    console.log("calling the onBluePrintAdded in the app.ts");
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}