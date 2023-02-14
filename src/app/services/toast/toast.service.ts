import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(
    public toastController: ToastController
  ) { }

  async presentToast(header: string, message: string, position: any, color: string, duration: number, icon?: string) {

    if (!icon) {
      switch (color) {
        case 'success':
          icon = 'checkmark-outline';
          break;
        case 'medium':
          icon = 'information-circle-outline';
          break;
        case 'danger':
          icon = 'warning-outline';
          break;
      }
    }

    const toast = await this.toastController.create({
      header: header,
      message: message,
      duration: duration,
      position: position,
      color: color,
      icon: icon
    });

    await toast.present();
  }
}
