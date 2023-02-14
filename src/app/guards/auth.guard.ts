import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  async canActivate(): Promise<boolean> {

    const is_signed_in = !!(await this.authService.getSession());

    // If not signed in, redirect to welcome page
    if (!is_signed_in) {
      this.router.navigate(['/welcome']);
    }

    return is_signed_in;
  }
}