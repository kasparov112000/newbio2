import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventResolver } from './event-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: EventComponent,
    resolve: {
      event: EventResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}
