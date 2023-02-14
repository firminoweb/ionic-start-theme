import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackupsPageRoutingModule } from './backups-routing.module';

import { BackupsPage } from './backups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackupsPageRoutingModule
  ],
  declarations: [BackupsPage]
})
export class BackupsPageModule {}
