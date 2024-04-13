import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactFormPage } from './react-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReactFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactFormPageRoutingModule {}
