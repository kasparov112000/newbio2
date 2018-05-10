import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationComponent } from './donation.component';
import { DonationResolver } from './donation-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: DonationComponent,
    resolve: {
      donation: DonationResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule {}
