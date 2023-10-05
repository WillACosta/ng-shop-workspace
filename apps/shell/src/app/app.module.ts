import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { NgxsModule } from '@ngxs/store'

import { ToastrModule } from 'ngx-toastr'

import { AuthFacade } from '@ng-shop-workspace/auth-state'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
		ToastrModule.forRoot({
			preventDuplicates: true,
			closeButton: true,
			progressBar: true,
			autoDismiss: true
		}),
		NgxsModule.forRoot([]),
		NgxsLoggerPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot()
	],
	providers: [AuthFacade],
	bootstrap: [AppComponent]
})
export class AppModule {}
