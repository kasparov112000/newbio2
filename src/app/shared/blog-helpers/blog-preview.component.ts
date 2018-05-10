import { Component, Input } from '@angular/core';

import { Blog } from '../../core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html'
})
export class BlogPreviewComponent {
  @Input() blog: Blog;

  onToggleFavorite(favorited: boolean) {
    this.blog['favorited'] = favorited;

    if (favorited) {
      this.blog['favoritesCount']++;
    } else {
      this.blog['favoritesCount']--;
    }
  }
}
