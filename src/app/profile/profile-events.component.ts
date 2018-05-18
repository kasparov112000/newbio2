import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-events',
  templateUrl: './profile-events.component.html'
})
export class ProfileEventsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  eventsConfig: EventListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.eventsConfig = {
          type: 'all',
          filters: {}
        }; // Only method I found to refresh event load on swap
        this.eventsConfig.filters.author = this.profile.username;
      }
    );
  }

}
