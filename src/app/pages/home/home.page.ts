import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit() {
    // this.onTabSelected('popular');
  }

  // onTabSelected(segmentValue: string) {
  //   this.segment = segmentValue;
  //   this.page = 1;
  //   this.content.scrollToTop();
  //   this.loadMovies();
  // }

  // onNextPage() {
  //   this.page++;
  //   this.loadMovies();
  // }

  // onMovieDetail(id: number) {
  //   this.router.navigate(['movie-detail', id]);
  // }

  onSearch() {
    this.router.navigate(['search']);
  }

  private async loadMovies() {
    const loadingOpts = { translucent: true, spinner: 'crescent', content: 'Cargando' };
    const loading = await this.loadingCtrl.create(loadingOpts);
    loading.present();
    loading.dismiss();
  }

}
