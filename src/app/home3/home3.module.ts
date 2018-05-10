import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home3Component } from './home3.component';
import { Home3AuthResolver } from './home3-auth-resolver.service';
import { SharedModule } from '../shared';
import { Home3RoutingModule } from './home3-routing.module';

@NgModule({
  imports: [
    SharedModule,
    Home3RoutingModule
  ],
  declarations: [
    Home3Component
  ],
  providers: [
    Home3AuthResolver
  ]
})

export class Home3Module {}
