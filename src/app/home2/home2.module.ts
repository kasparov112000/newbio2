import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home2Component } from './home2.component';
import { Home2AuthResolver } from './home2-auth-resolver.service';
import { SharedModule } from '../shared';
import { Home2RoutingModule } from './home2-routing.module';

@NgModule({
  imports: [
    SharedModule,
    Home2RoutingModule
  ],
  declarations: [
    Home2Component
  ],
  providers: [
    Home2AuthResolver
  ]
})
export class Home2Module {}
