import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Blog, BlogsService, UserService } from '../core';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';

@Injectable()
export class EditableBlogResolver implements Resolve<Blog> {
  constructor(
    private blogsService: BlogsService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.blogsService.get(route.params['slug'])
      .pipe(
        map(
          blog => {
            if (this.userService.getCurrentUser().username === blog.author.username) {
              return blog;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
