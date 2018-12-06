import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderConfirmedPage } from './order-confirmed.page';
import { LottieAnimationViewModule } from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: OrderConfirmedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LottieAnimationViewModule
  ],
  declarations: [OrderConfirmedPage]
})
export class OrderConfirmedPageModule {}
