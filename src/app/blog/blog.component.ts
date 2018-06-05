import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TdTextEditorComponent } from '@covalent/text-editor';

import {
  Blog,
  BlogsService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  blog: Blog;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;
  options: any = {
    lineWrapping: false,
    toolbar: false

  };

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retreive the prefetched blog
    this.route.data.subscribe(
      (data: { blog: Blog }) => {
        this.blog = data.blog;

        // Load the comments on this blog
        this.populateComments();
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        console.log('is this user admin ' + this.currentUser.isAdmin);
        this.canModify = (this.currentUser.username === this.blog.author.username) || this.currentUser.isAdmin;
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.blog.favorited = favorited;

    if (favorited) {
      this.blog.favoritesCount++;
    } else {
      this.blog.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.blog.author.following = following;
  }

  deleteBlog() {
    this.isDeleting = true;

    this.blogsService.destroy(this.blog.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.blog.slug)
      .subscribe(comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.blog.slug, commentBody)
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
    this.commentsService.destroy(comment.id, this.blog.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }

}
