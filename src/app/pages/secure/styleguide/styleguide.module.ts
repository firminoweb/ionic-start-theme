import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyleguidePageRoutingModule } from './styleguide-routing.module';

import { StyleguidePage } from './styleguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyleguidePageRoutingModule
  ],
  declarations: [StyleguidePage]
})
export class StyleguidePageModule {}
