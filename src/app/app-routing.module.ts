import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '', canActivate: [AuthGuard], loadChildren: './tabs/tabs.module#TabsPageModule' },
	{ path: 'login', loadChildren: './access/login/login.module#LoginPageModule' },
	{ path: 'signup', loadChildren: './access/signup/signup.module#SignupPageModule' },
	{ path: 'tabs', canActivate: [AuthGuard], loadChildren: './tabs/tabs.module#TabsPageModule' },
	{ path: 'restaurant', canActivate: [AuthGuard], loadChildren: './restaurant/restaurant.module#RestaurantPageModule' },
	{ path: 'item', canActivate: [AuthGuard], loadChildren: './restaurant/item/item.module#ItemPageModule' },
	{ path: 'about', loadChildren: './restaurant/about/about.module#AboutPageModule' },
	{ path: 'cards', loadChildren: './menu/cards/cards.module#CardsPageModule' },
	{ path: 'edit-card', loadChildren: './menu/cards/edit-card/edit-card.module#EditCardPageModule' },
	{ path: 'history', loadChildren: './menu/history/history.module#HistoryPageModule' },
	{ path: 'history-details', loadChildren: './menu/history/history-details/history-details.module#HistoryDetailsPageModule' },
	{ path: 'config', loadChildren: './menu/config/config.module#ConfigPageModule' },
  { path: 'order-cart', loadChildren: './restaurant/order-cart/order-cart.module#OrderCartPageModule' },
  { path: 'order-end', loadChildren: './restaurant/order-end/order-end.module#OrderEndPageModule' },
  { path: 'cards-list', loadChildren: './restaurant/cards-list/cards-list.module#CardsListPageModule' },
  { path: 'new-card', loadChildren: './restaurant/new-card/new-card.module#NewCardPageModule' },
  { path: 'order-confirmed', loadChildren: './restaurant/order-confirmed/order-confirmed.module#OrderConfirmedPageModule' }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }