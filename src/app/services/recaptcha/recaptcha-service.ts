import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private apiUrl = `${environment.apiBase}/recaptcha/verify`;

  constructor(private http: HttpClient) {}

  verifyToken(token: string): Observable<any> {
    return this.http.post(this.apiUrl, { token });
  }
}
