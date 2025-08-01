import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaigaSharedModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
  });

  constructor() {}

  enviar(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
