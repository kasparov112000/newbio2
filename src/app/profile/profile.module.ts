import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileBlogsComponent } from './profile-blogs.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEventsComponent } from './profile-events.component';
import { ProfileAttendsComponent } from './profile-attends.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileBlogsComponent,
    ProfileComponent,
    ProfileFavoritesComponent,
    ProfileEventsComponent,
    ProfileAttendsComponent
  ],
  providers: [
    ProfileResolver
  ]
})
export class ProfileModule {}
