import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-blogs',
  templateUrl: './profile-blogs.component.html'
})
export class ProfileBlogsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  blogsConfig: BlogListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.blogsConfig = {
          type: 'all',
          filters: {}
        }; // Only method I found to refresh blog load on swap
        this.blogsConfig.filters.author = this.profile.username;
      }
    );
  }

}
