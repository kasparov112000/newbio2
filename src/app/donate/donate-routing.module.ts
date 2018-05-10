import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateComponent } from './donate.component';
import { EditableDonateResolver } from './editable-donate-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';



const routes: Routes = [
  {
    path: '',
    component: DonateComponent,
    canActivate: [AuthGuard],
    resolve: {
      donation: EditableDonateResolver
    }
   },
  {
    path: ':slug',
    component: DonateComponent,
    canActivate: [AuthGuard],
    resolve: {
      donation: EditableDonateResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateRoutingModule {}
