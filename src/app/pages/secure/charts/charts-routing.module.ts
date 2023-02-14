import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsPage } from './charts.page'
const routes: Routes = [
  {
    path: '',
    component: ChartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsPageRoutingModule {}
