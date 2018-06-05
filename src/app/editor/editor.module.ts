import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';
import { EditableBlogResolver } from './editable-blog-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { EditorRoutingModule } from './editor-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CovalentTextEditorModule } from '@covalent/text-editor';

@NgModule({
  imports: [SharedModule, EditorRoutingModule, AngularEditorModule, CovalentTextEditorModule
  ],
  declarations: [EditorComponent],
  providers: [EditableBlogResolver]
})
export class EditorModule {}
