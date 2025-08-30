import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { TuiButton, TuiDialog } from '@taiga-ui/core';
import { CookiesConsentService } from '../../services/cookies-consent-service/cookies-consent-service';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, TuiDialog, TuiButton],
  templateUrl: './cookies.html',
  styleUrl: './cookies.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cookies {
  cookiesConsentService = inject(CookiesConsentService);
  protected custom = true;

  acepta(acepta: boolean) {
    this.custom = false;
    this.cookiesConsentService.setConsent(acepta);
  }
}
