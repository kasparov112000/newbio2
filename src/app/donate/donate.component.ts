import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Donation, DonationsService, UserService } from '../core';


@Component({
  selector: 'app-donate-page',
  templateUrl: './donate.component.html'
})

export class DonateComponent implements OnInit {
  donation: Donation = {} as Donation;
  donationForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;
  isAuthenticated: boolean;

  constructor(
    private donationsService: DonationsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    // use the FormBuilder to create a form group
    this.donationForm = this.fb.group({
      title: '',
      description: '',
      location: '',
      body: ''
    });

    // Initialized tagList as empty array
    this.donation.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.donationForm.valueChanges.subscribe(value => this.updateDonation(value));
  }

  ngOnInit() {
    // If there's an donation prefetched, load it
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.route.data.subscribe((data: { donation: Donation }) => {
      if (data.donation) {
        this.donation = data.donation;
        this.donationForm.patchValue(data.donation);
      }
    });
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.donation.tagList.indexOf(tag) < 0) {
      this.donation.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.donation.tagList = this.donation.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateDonation(this.donationForm.value);

    // post the changes
    this.donationsService.save(this.donation).subscribe(
      donation => this.router.navigateByUrl('/donation/' + donation.slug),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateDonation(values: Object) {
    Object.assign(this.donation, values);
  }
}
