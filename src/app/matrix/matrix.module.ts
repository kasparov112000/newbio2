import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatrixComponent } from './matrix.component';
import { EditableEventResolver } from './editable-event-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { MatrixRoutingModule } from './matrix-routing.module';

@NgModule({
  imports: [SharedModule, MatrixRoutingModule],
  declarations: [MatrixComponent],
  providers: [EditableEventResolver]
})
export class MatrixModule {}
