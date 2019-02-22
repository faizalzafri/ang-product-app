import { Component } from '@angular/core';
//import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

  // template: "<h1>{{pageTitle}}</h1>" //inline template
  // template:                          //inline template back ticks
  // `<div>
  //   <h1> {{pageTitle}} </h1>
  // </div>` 
})

export class AppComponent {
  pageTitle: String = 'ACME Product Management';
}
