export interface Alert {
  message: string;
  title?: string;
  severity?: 'success' | 'info' | 'warn' | 'error';
}
