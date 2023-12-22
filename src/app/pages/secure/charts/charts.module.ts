import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';

// NgCharts
import { NgChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule,
    NgChartsModule,
    QRCodeModule
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule {}
