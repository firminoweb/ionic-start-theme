import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  no: any;
  nom: any;
  total: any;
  consomme: any;
  fillPercentage: number = 0;
  constructor(
    private authService: AuthService
  ) {
    this.no = sessionStorage.getItem('No').replace(/"/g, '');
    this.nom = sessionStorage.getItem('Main_Contact_Name').replace(/"/g, '');
    this.total = sessionStorage.getItem('Issued_Award_Points');
    this.consomme = sessionStorage.getItem('Unprocessed_Points');
  }
  calculatePercentage(): number {
    if (this.total === 0) {
      return 100; // Full gauge if total points are zero
    } else {
      return ((this.total + this.consomme) / this.total) * 100;
    }
  }
  ngOnInit() {
    this.calculateFillPercentage();
  }


  calculateFillPercentage() {
    this.fillPercentage = (-1 * (this.consomme) / (this.total)) * 100;
  }
  // Sign out
  signOut() {
    this.authService.signOut();
  }

}
