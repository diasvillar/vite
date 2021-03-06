import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
//import { SearchPageModule } from '../search/search.module';
//import { CartPageModule } from '../cart/cart.module';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		TabsPageRoutingModule,
		HomePageModule,
		//SearchPageModule,
		//CartPageModule,
		MenuPageModule
	],
	declarations: [TabsPage]
})
export class TabsPageModule {}
