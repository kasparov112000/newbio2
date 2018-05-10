import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventCommentComponent } from './event-comment.component';
import { EventResolver } from './event-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    SharedModule,
    EventRoutingModule
  ],
  declarations: [
    EventComponent,
    EventCommentComponent,
    MarkdownPipe
  ],

  providers: [
    EventResolver
  ]
})
export class EventModule {}
