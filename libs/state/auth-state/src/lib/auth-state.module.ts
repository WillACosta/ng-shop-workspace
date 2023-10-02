import { HttpClientModule } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { AUTH_STATE_OPTIONS, AuthStateOptions } from './core/injection'
import { AuthService } from './services/auth'
import { AuthFacade } from './services/facade'

@NgModule({
  imports: [HttpClientModule]
})
export class SharedAuthStateModule {
  static forRoot(
    options: AuthStateOptions
  ): ModuleWithProviders<SharedAuthStateModule> {
    return {
      ngModule: SharedAuthStateModule,
      providers: [
        AuthFacade,
        AuthService,
        {
          provide: AUTH_STATE_OPTIONS,
          useValue: options
        }
      ]
    }
  }
}
