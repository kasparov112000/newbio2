import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog, BlogsService, UserService, User } from '../core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AngularEditorConfig } from '@kolkov/angular-editor';


const URL = 'http://localhost:3000/api/upload';

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

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no'
  };

  options: any = {
    lineWrapping: true,
    toolbar: true
  };

    constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    // use the FormBuilder to create a form group
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      toFrontPage: '',
      approved: '',
      showOnlyPreview: '',
      body: '',
      htmlContent: ''
    });

    // Initialized tagList as empty array
    this.blog.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.blogForm.valueChanges.subscribe(value => this.updateBlog(value));
  }

  isAdmin: boolean;

  ngOnInit() {
    // If there's an blog prefetched, load it
    this.route.data.subscribe((data: { blog: Blog }) => {
      if (data.blog) {
        this.blog = data.blog;
        this.blogForm.patchValue(data.blog);
      }
    });

      // Load the current user's data
      this.userService.currentUser.subscribe(
        (userData: User) => {
          this.isAdmin = (userData.isAdmin);
        }
      );

      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
           console.log('ImageUpload:uploaded:', item, status, response);
           alert('File uploaded successfully');
       };


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
