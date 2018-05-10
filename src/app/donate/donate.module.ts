import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DonateComponent } from './donate.component';
import { EditableDonateResolver } from './editable-donate-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { DonateRoutingModule } from './donate-routing.module';

@NgModule({
  imports: [SharedModule, DonateRoutingModule],
  declarations: [DonateComponent],
  providers: [EditableDonateResolver]
})

export class DonateModule {}
