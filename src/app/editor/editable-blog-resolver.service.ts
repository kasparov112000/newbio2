import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Blog, BlogsService, UserService } from '../core';
import { catchError ,  map } from 'rxjs/operators';

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
            if (this.userService.getCurrentUser().username === blog.author.username || this.userService.getCurrentUser().isAdmin)  {
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
