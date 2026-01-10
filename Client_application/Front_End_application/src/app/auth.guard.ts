import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = localStorage.getItem('Token');
  if (token) {
    return true;
  } else {
    router.navigate(['/login']); //  consider using redirectcommands instead of navigate
    return false;
  }
  
};
