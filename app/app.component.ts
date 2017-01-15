import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <div>
        <button (click)="handleClick(username.value)">
          Get Value
        </button>
        <input type="text" #username>
        <p>{{ name }}</p>
      </div>

    </div>
  `
})
export class AppComponent {
  name: string = 'Gary';
  handleClick(value: string) {
    console.log(value);
  }
}
