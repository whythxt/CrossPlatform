import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactFormPageRoutingModule } from './react-form-routing.module';

import { ReactFormPage } from './react-form.page';
import { MyformComponent } from '../myform/myform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReactFormPage, MyformComponent]
})
export class ReactFormPageModule {}
