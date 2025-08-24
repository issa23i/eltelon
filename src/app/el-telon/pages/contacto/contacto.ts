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
import { concatMap, of } from 'rxjs';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaService } from '../../../services/recaptcha/recaptcha-service';
import { environment } from '../../../../environments/environment';
import { Email } from '../../../services/email/email';
import { IContacto } from '../../../interface/contacto.interface';

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
  private readonly emailService = inject(Email);

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
    console.log('Token recibido:', token);

    if (!token) {
      console.error('Captcha token es null');
      return;
    }

    this.form.patchValue({ recaptcha: token });

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.recaptchaService
      .verifyToken(token)
      .pipe(
        concatMap((res) => {
          console.log('Verificación exitosa:', res);
          return this.emailService.enviarFormulario(
            this.form.value as IContacto
          );
        })
      )
      .subscribe({
        next: () => {
          console.log('Correo enviado correctamente');
          // Aquí podrías resetear el formulario o mostrar un snackbar
        },
        error: (err) => {
          console.error('Error en el proceso:', err);
          // Snackbar de error
        },
      });
  }
}
