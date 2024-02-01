import { Inject, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../servics/user-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  let userAuth = inject(UserAuthService);
  return userAuth.isLoggedIn();
};
