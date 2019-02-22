import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  template: '<h1> {{pageTitle}} </h1>'
})
export class AppComponent {
  pageTitle: String = 'ACME Product Management';
}
