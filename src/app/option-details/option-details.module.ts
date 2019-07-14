import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModule } from '../component/component.module';

import { IonicModule } from '@ionic/angular';

import { OptionDetailsPage } from './option-details.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDetailsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentModule,
        RouterModule.forChild(routes)],
    declarations: [OptionDetailsPage]
})
export class OptionDetailsPageModule {}
