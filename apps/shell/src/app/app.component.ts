import { Component } from '@angular/core';

@Component({
  selector: 'ng-shop-workspace-root',
  template: `
    <main class="h-screen w-full">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
