import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleguidePage } from './styleguide.page';

const routes: Routes = [
  {
    path: '',
    component: StyleguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleguidePageRoutingModule {}
