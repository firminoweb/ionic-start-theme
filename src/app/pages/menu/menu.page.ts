import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';
import { Events, MenuController } from '@ionic/angular';

@Component({
  templateUrl: 'menu.page.html'
})

export class MenuPage implements OnInit {

  constructor(
    // private router: Router,
    public event: Events,
    // public storage: Storage,
    public menuCtrl: MenuController
  ) {}

  ngOnInit() {
  }

}
