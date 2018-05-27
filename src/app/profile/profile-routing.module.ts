import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBlogsComponent } from './profile-blogs.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileComponent } from './profile.component';
import { ProfileEventsComponent } from './profile-events.component';
import { ProfileAttendsComponent } from './profile-attends.component';


const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: ProfileBlogsComponent
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent
      },
      {
        path: 'events',
        component: ProfileEventsComponent
      },
      {
        path: 'aevents',
        component: ProfileAttendsComponent
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
