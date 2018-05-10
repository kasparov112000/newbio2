import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Event, EventsService, UserService } from '../core';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';

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
            if (this.userService.getCurrentUser().username === event.author.username) {
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
