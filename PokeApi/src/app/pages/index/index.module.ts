import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    IndexPageRoutingModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
