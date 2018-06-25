import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';
import { Events, MenuController } from '@ionic/angular';

@Component({
  templateUrl: 'menu.page.html'
})

export class MenuPage implements OnInit {
  public favorites = [];
  constructor(
    // private router: Router,
    public event: Events,
    // public storage: Storage,
    public menuCtrl: MenuController
  ) {}

  ngOnInit() {
    // this.getKeys();
    // this.event.subscribe('userAdded', e => {
    //   this.favorites = [...this.favorites, e];
    // });
    // this.event.subscribe('userRemoved', e => {
    //   this.favorites = this.favorites.filter(fav => fav.mikeID !== e.mikeID)
    // });
  }
  // getKeys() {
  //   this.storage.forEach(entry => {
  //     this.favorites.push(entry);
  //   });
  // }
  // goToDetail(favorite) {
  //   this.menuCtrl.close().then(() => {
  //     this.router.navigate(['user', JSON.stringify(favorite)]);
  //   });
  // }
}
