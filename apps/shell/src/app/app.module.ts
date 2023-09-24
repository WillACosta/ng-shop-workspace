import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgxsModule } from '@ngxs/store'

import { AuthFacade } from '@ng-shop-workspace/shared/auth-state'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),

    NgxsModule.forRoot([])
  ],
  providers: [AuthFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
