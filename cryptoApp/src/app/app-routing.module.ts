import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cryto-list',
    pathMatch: 'full'
  },
  {
    path: 'cryto-list',
    loadChildren: () => import('./pages/cryto-list/cryto-list.module').then( m => m.CrytoListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
