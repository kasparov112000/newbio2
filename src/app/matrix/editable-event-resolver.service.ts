import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Event, EventsService, UserService } from '../core';
import { catchError ,  map } from 'rxjs/operators';

@Injectable()
export class EditableEventResolver implements Resolve<Event> {
  constructor(
    private eventsService: EventsService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.eventsService.get(route.params['slug'])
      .pipe(
        map(
          event => {
            if ((this.userService.getCurrentUser().username === event.author.username)
            || this.userService.getCurrentUser().isAdmin) {
              return event;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
