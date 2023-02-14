import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  async canActivate(): Promise<boolean> {
    
    const is_signed_in = !!(await this.authService.getSession());

    // If signed in, redirect to home page
    if (is_signed_in) {
      this.router.navigate(['/home']);
    }

    return !is_signed_in;
  }
}
