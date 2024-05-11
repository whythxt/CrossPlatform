import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepagePageRoutingModule } from './observablepage-routing.module';

import { ObservablepagePage } from './observablepage.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepagePageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [ObservablepagePage]
})
export class ObservablepagePageModule {}
