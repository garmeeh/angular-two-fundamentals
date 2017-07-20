import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Opps! Page Not Found.
      <a routerLink="/">Go Home</a>
    </div>
  `
})
export class NotFoundComponent {}
