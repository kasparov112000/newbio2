import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import {ProgressBarService} from './shared/progress-bar.service';

import {
  ApiService,
  BlogsService,
  EventsService,
  AuthGuard,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService
} from './services';
import { DonationsService } from './services/donations.service';
import { LoggerService } from './shared/logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    BlogsService,
    DonationsService,
    EventsService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService,
    ProgressBarService,
    LoggerService
  ],
  declarations: []
})
export class CoreModule { }
