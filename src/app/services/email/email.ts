import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IContacto } from '../../interface/contacto.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Email {
  private readonly http = inject(HttpClient);
  private readonly apiBase = environment.apiBase;

  enviarFormulario(data: IContacto): Observable<void> {
    return this.http.post<void>(`${this.apiBase}/api/mail`, data);
  }
}
