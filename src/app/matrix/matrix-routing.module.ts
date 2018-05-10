import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatrixComponent } from './matrix.component';
import { EditableEventResolver } from './editable-event-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: MatrixComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':slug',
    component: MatrixComponent,
    canActivate: [AuthGuard],
    resolve: {
      event: EditableEventResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixRoutingModule {}
