import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrytoListPage } from './cryto-list.page';

const routes: Routes = [
  {
    path: '',
    component: CrytoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrytoListPageRoutingModule {}
