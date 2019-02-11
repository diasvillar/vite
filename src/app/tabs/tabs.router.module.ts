import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
//import { SearchPage } from '../search/search.page';
//import { CartPage } from '../cart/cart.page';
import { MenuPage } from '../menu/menu.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: '',
				redirectTo: '/tabs/(home:home)',
				pathMatch: 'full',
			}, {
				path: 'home',
				outlet: 'home',
				component: HomePage
			},/* {
				path: 'search',
				outlet: 'search',
				component: SearchPage
			}, {
				path: 'cart',
				outlet: 'cart',
				component: CartPage
			},*/ {
				path: 'menu',
				outlet: 'menu',
				component: MenuPage
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/(home:home)',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
