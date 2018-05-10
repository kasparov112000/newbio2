import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Event, EventsService } from '../core';

@Component({
  selector: 'app-matrix-page',
  templateUrl: './matrix.component.html'
})
export class MatrixComponent implements OnInit {
  event: Event = {} as Event;
  eventForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.eventForm = this.fb.group({
      title: '',
      description: '',
      location: '',
      body: ''
    });

    // Initialized tagList as empty array
    this.event.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.eventForm.valueChanges.subscribe(value => this.updateEvent(value));
  }

  ngOnInit() {
    // If there's an event prefetched, load it
    this.route.data.subscribe((data: { event: Event }) => {
      if (data.event) {
        this.event = data.event;
        this.eventForm.patchValue(data.event);
      }
    });
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.event.tagList.indexOf(tag) < 0) {
      this.event.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.event.tagList = this.event.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateEvent(this.eventForm.value);

    // post the changes
    this.eventsService.save(this.event).subscribe(
      event => this.router.navigateByUrl('/event/' + event.slug),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateEvent(values: Object) {
    Object.assign(this.event, values);
  }
}
