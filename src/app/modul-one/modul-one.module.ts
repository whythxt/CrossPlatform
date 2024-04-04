import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModulOnePageRoutingModule } from './modul-one-routing.module';
import { ModulOnePage } from './modul-one.page';
import { DerivativeInputComponent } from '../derivative-input/derivative-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulOnePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModulOnePage, DerivativeInputComponent],
  exports: [DerivativeInputComponent]
})
export class ModulOnePageModule {}
