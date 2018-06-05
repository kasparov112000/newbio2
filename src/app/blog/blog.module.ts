import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogCommentComponent } from './blog-comment.component';
import { BlogResolver } from './blog-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { BlogRoutingModule } from './blog-routing.module';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { CovalentMarkdownModule } from '@covalent/markdown';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CovalentTextEditorModule,
    CovalentMarkdownModule
  ],
  declarations: [
    BlogComponent,
    BlogCommentComponent,
    MarkdownPipe
  ],

  providers: [
    BlogResolver
  ]
})
export class BlogModule {}
