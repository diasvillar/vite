import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { HistoryDetailsPageModule } from './history-details/history-details.module';
import { HistoryDetailsPage } from './history-details/history-details.page';

const routes: Routes = [
	{
		path: '',
		component: HistoryPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HistoryDetailsPageModule,
		RouterModule.forChild(routes)
	],
	declarations: [HistoryPage],
	entryComponents: [HistoryDetailsPage]
})
export class HistoryPageModule {}
