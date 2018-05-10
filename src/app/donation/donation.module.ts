import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DonationComponent } from './donation.component';
import { DonationCommentComponent } from './donation-comment.component';
import { DonationResolver } from './donation-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { DonationRoutingModule } from './donation-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DonationRoutingModule
  ],
  declarations: [
    DonationComponent,
    DonationCommentComponent,
    MarkdownPipe
  ],

  providers: [
    DonationResolver
  ]
})
export class DonationModule {}
