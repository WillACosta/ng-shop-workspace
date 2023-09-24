import { HttpClientModule } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { AuthService } from './services/auth'
import { AuthFacade } from './services/facade'

@NgModule({
  imports: [HttpClientModule]
})
export class SharedAuthStateModule {
  /// create module with given URL for AuthService
  static forRoot(authApi: string): ModuleWithProviders<SharedAuthStateModule> {
    return {
      ngModule: SharedAuthStateModule,
      providers: [
        AuthFacade,
        AuthService,
        {
          provide: 'authApi',
          useValue: authApi
        }
      ]
    }
  }
}
