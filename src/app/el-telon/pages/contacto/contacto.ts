import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { of } from 'rxjs';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaService } from '../../../services/recaptcha/recaptcha-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TaigaSharedModule,
    RecaptchaModule,
    FormsModule,
  ],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    tuiValidationErrorsProvider({
      required: 'Campo obligatorio',

      minlength: ({ requiredLength }: { requiredLength: string }) =>
        of(`Mínimo ${+requiredLength - 3} dígitos`),
    }),
  ],
})
export class Contacto {
  @ViewChild('captchaRef') recaptchaComponent!: any;
  private readonly cdRef = inject(ChangeDetectorRef);
  private readonly fb = inject(FormBuilder);
  private readonly recaptchaService = inject(RecaptchaService);

  readonly siteKey = environment.recaptchaSiteKey;

  readonly form = this.fb.group({
    nombre: ['', Validators.required],
    apellido1: ['', Validators.required],
    apellido2: [''],
    telefono: ['', [Validators.required, Validators.minLength(12)]],
    mensaje: [''],
    privacidad: [false, Validators.requiredTrue],
    condiciones: [false, Validators.requiredTrue],
    recaptcha: ['', Validators.required],
  });

  constructor() {}

  enviar(): void {
    this.ejecutarCaptcha(); // Solo ejecuta captcha, no envía aún
  }

  ejecutarCaptcha(): void {
    this.recaptchaComponent.execute();
  }

  onCaptchaResolved(token: string | null): void {
    this.cdRef.detectChanges();
    if (token) {
      this.form.patchValue({ recaptcha: token });

      if (this.form.valid) {
        this.recaptchaService.verifyToken(token).subscribe({
          next: (_res) => {
            // TODO: Envío del email
          },
          error: (err) => {
            console.error('Falló la verificación:', err);
            // TODO: Snackbar aviso usuario
          },
        });
      } else {
        this.form.markAllAsTouched();
      }
    } else {
      console.error('Captcha token es null');
    }
  }
}
