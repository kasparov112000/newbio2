import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, UserService, Profile } from '../../core';


@Component({
  selector: 'app-my-nav',
  templateUrl: './app-my-nav.component.html',
  styleUrls: ['./app-my-nav.component.scss']
})

export class AppMyNavComponent implements OnInit {
  progressBarMode: string;
  menuItems: any[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isAuthenticated: boolean;
  currentUser: User;
  profile: Profile;

  constructor(private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );
        // Load the current user's data
        this.userService.currentUser.subscribe(
          (userData: User) => {
            this.currentUser = userData;
            console.log('is this user admin ' + this.currentUser.isAdmin);
          }
        );
  }
  private loadMenus(): void {

    this.menuItems = [
      { link: '/' },
      { link: '/' }
    ];

  }
}
