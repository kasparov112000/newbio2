import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgressBarService } from '../core/shared/progress-bar.service';
import { BlogListConfig, TagsService, UserService, User } from '../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './app-my-nav.component.html',
  styleUrls: ['./app-my-nav.component.scss']
})

export class AppMyNavComponent implements OnInit {
  progressBarMode: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isAuthenticated: boolean;
  currentUser: User;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );
  }

}
