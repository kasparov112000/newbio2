import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Event,
  EventsService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {
  event: Event;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retreive the prefetched event
    this.route.data.subscribe(
      (data: { event: Event }) => {
        this.event = data.event;

        // Load the comments on this event
        this.populateComments();
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        this.canModify = (this.currentUser.username === this.event.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.event.favorited = favorited;

    if (favorited) {
      this.event.favoritesCount++;
    } else {
      this.event.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.event.author.following = following;
  }

  onToggleAttending(attending: boolean) {

    this.event.attending = attending;
  }

  deleteEvent() {
    this.isDeleting = true;

    this.eventsService.destroy(this.event.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
  //  this.commentsService.getAll(this.event.slug)
   //   .subscribe(comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.event.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        }
      );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.event.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }

}
