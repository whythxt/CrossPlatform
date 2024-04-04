import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulOnePage } from './modul-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModulOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulOnePageRoutingModule {}
