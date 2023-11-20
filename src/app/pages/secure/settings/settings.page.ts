import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  user!: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.user = this.authService.getProfile();
    console.log(this.user);
  }

  // Sign out
  async signOut() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService
      .signOut()
      .then(() => {
        this.router.navigate(['/signin']);
        loading.dismiss();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
