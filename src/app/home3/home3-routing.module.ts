import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home3Component } from './home3.component';
import { Home3AuthResolver } from './home3-auth-resolver.service';

const routes: Routes = [
  {
    path: 'donations',
    component: Home3Component,
    resolve: {
      isAuthenticated: Home3AuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home3RoutingModule {}
