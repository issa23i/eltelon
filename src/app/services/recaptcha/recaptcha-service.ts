import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private apiUrl = 'http://localhost:3000/api/recaptcha/verify';

  constructor(private http: HttpClient) {}

  verifyToken(token: string): Observable<any> {
    console.log(token);

    return this.http.post(this.apiUrl, { token });
  }
}
