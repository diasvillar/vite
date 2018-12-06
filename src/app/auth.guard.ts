import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.checkLogin();
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.canActivate(route, state);
	}

	async checkLogin() {
		return true;
	}

}