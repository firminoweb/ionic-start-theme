import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';

import { LoadingController, Content } from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  segment: string;
  page: number;
  @ViewChild(Content) content: Content;

  constructor(
    // private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.onTabSelected('hottest');
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
    this.content.scrollToTop();
  }

  // onSearch() {
  //   this.router.navigate(['search']);
  // }



}
