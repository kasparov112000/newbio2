import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Donation, DonationsService, UserService } from '../core';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';

@Injectable()
export class EditableDonateResolver implements Resolve<Donation> {
  constructor(
    private donationsService: DonationsService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.donationsService.get(route.params['slug'])
      .pipe(
        map(
          donation => {
            if (this.userService.getCurrentUser().username === donation.author.username) {
              return donation;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
