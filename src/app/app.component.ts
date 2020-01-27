import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsAndDatabindingDeepDive';
 serverElements = [{type:'server', name:'testserver', content:'just a test from the app-root'}];
  
  
}