import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog, BlogsService } from '../core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  blog: Blog = {} as Blog;
  blogForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      body: ''
    });

    // Initialized tagList as empty array
    this.blog.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.blogForm.valueChanges.subscribe(value => this.updateBlog(value));
  }

  ngOnInit() {
    // If there's an blog prefetched, load it
    this.route.data.subscribe((data: { blog: Blog }) => {
      if (data.blog) {
        this.blog = data.blog;
        this.blogForm.patchValue(data.blog);
      }
    });
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.blog.tagList.indexOf(tag) < 0) {
      this.blog.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.blog.tagList = this.blog.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateBlog(this.blogForm.value);

    // post the changes
    this.blogsService.save(this.blog).subscribe(
      blog => this.router.navigateByUrl('/blog/' + blog.slug),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateBlog(values: Object) {
    Object.assign(this.blog, values);
  }
}
