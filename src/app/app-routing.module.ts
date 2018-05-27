import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { AppMyDashboardComponent } from './my-dashboard/my-dashboard.component';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'first-page',
    component: FirstPageComponent
  },
  {
    path: 'dashboard',
    component: AppMyDashboardComponent
  },
   {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
  },
  {
    path: 'matrix',
    loadChildren: './matrix/matrix.module#MatrixModule'
  },

  {
    path: 'donate',
    loadChildren: './donate/donate.module#DonateModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'donation',
    loadChildren: './donation/donation.module#DonationModule'
  },
  {
    path: 'event',
    loadChildren: './event/event.module#EventModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
