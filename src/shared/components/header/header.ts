import { Component, inject } from '@angular/core';

import { AuthService } from '@core/services/api/auth.service';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'shared-header',
  imports: [ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
