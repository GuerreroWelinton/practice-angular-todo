import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'todo-dashboard',
  imports: [ButtonModule],
  templateUrl: './todo-dashboard.html',
  styleUrl: './todo-dashboard.css',
})
export class TodoDashboard {
  authService = inject(AuthService);

  username = computed(() => this.authService.user()?.username.toLowerCase());
}
