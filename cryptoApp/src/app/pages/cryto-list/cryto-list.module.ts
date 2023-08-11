import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrytoListPageRoutingModule } from './cryto-list-routing.module';

import { CrytoListPage } from './cryto-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrytoListPageRoutingModule
  ],
  declarations: [CrytoListPage]
})
export class CrytoListPageModule {}
