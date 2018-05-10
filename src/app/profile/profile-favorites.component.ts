import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html'
})
export class ProfileFavoritesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  favoritesConfig: BlogListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );
  }

}
