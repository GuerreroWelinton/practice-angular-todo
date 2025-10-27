import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.loadUserSession();
  }
}
