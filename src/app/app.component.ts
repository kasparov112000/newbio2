import { Component, OnInit } from '@angular/core';
import { UserService } from './core';
import { Router } from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Biolink App');
   this.userService.populate();
  }
}
