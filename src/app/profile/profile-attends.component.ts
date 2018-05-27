import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-attends',
  templateUrl: './profile-attends.component.html'
})
export class ProfileAttendsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  attendsConfig: EventListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
          this.attendsConfig.filters.attending = this.profile.username;
      }
    );
  }
}
