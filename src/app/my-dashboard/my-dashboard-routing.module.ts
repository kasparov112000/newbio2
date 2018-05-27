import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { AppMyDashboardComponent } from './my-dashboard.component';
import { EditableEventResolver } from '../matrix/editable-event-resolver.service';
import { MatrixComponent } from '../matrix/matrix.component';
import { EventComponent } from '../event/event.component';

const routes: Routes = [
  {
    path: '',
    component: AppMyDashboardComponent
  },
  {
    path: 'event',
    component: EventComponent,
    resolve: {
      event: EditableEventResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
