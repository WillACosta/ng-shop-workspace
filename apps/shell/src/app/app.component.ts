import { Component } from '@angular/core';

@Component({
  selector: 'ng-shop-workspace-root',
  template: `
    <ul class="remote-menu">
      Shell app works!
    </ul>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
