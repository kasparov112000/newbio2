import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2.component';
import { Home2AuthResolver } from './home2-auth-resolver.service';

const routes: Routes = [
  {
    path: 'events',
    component: Home2Component,
    resolve: {
      isAuthenticated: Home2AuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule {}
