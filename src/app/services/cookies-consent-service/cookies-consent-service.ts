import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookiesConsentService {
  private consentSubject = new BehaviorSubject<boolean>(false);
  consent$ = this.consentSubject.asObservable();

  setConsent(value: boolean): void {
    this.consentSubject.next(value);
  }

  getConsent(): boolean {
    return this.consentSubject.value;
  }
}
