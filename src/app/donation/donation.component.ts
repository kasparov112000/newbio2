import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Donation,
  DonationsService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation.component.html'
})
export class DonationComponent implements OnInit {
  donation: Donation;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private donationsService: DonationsService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retreive the prefetched donation
    this.route.data.subscribe(
      (data: { donation: Donation }) => {
        this.donation = data.donation;

        // Load the comments on this donation
        this.populateComments();
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.donation.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.donation.favorited = favorited;

    if (favorited) {
      this.donation.favoritesCount++;
    } else {
      this.donation.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.donation.author.following = following;
  }

  deleteDonation() {
    this.isDeleting = true;

    this.donationsService.destroy(this.donation.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.donation.slug)
      .subscribe(comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.donation.slug, commentBody)
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
    this.commentsService.destroy(comment.id, this.donation.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }

}
