import { inject, Injectable } from '@angular/core';
import { Alert } from '@core/interfaces/ui/alert.interface';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AlertService {
  #messageService = inject(MessageService);

  showSuccess({ title = 'Success', message, severity = 'success' }: Alert) {
    this.#messageService.add({ severity, summary: title, detail: message });
  }

  showInfo({ title = 'Info', message, severity = 'info' }: Alert) {
    this.#messageService.add({ severity, summary: title, detail: message });
  }

  showWarn({ title = 'Warning', message, severity = 'warn' }: Alert) {
    this.#messageService.add({ severity, summary: title, detail: message });
  }

  showError({ title = 'Error', message, severity = 'error' }: Alert) {
    this.#messageService.add({ severity, summary: title, detail: message });
  }
}
