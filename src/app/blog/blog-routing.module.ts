import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogResolver } from './blog-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
    resolve: {
      blog: BlogResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
