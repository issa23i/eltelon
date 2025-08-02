import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { of } from 'rxjs';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, TaigaSharedModule, RecaptchaModule],
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
  private readonly fb = inject(FormBuilder);

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
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      // TODO: CONEXIÓN CON BACKEND CHATPCHA E EMAIL
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCaptchaResolved(token: string | null) {
    if (token) {
      this.form.patchValue({ recaptcha: token });
    } else {
      console.error('Captcha token es null');
    }
  }
}
