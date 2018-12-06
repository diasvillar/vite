import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsPage } from './cards.page';
import { EditCardPageModule } from './edit-card/edit-card.module';
import { EditCardPage } from './edit-card/edit-card.page';

const routes: Routes = [
	{
		path: '',
		component: CardsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		EditCardPageModule
	],
	declarations: [CardsPage],
	entryComponents: [EditCardPage]
})
export class CardsPageModule {}
