import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  getErrorMessage(err: any): string {
    console.log(err);
    if (err.status === 0) return 'Sin conexión al servidor';
    if (err.status === 404) return 'Recurso no encontrado';
    if (err.status === 500) return 'Error interno del servidor';

    return err?.error?.message || 'Error inesperado';
  }
}

