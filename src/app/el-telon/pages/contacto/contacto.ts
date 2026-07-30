import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { TaigaSharedFormsModule } from '../../../shared/taiga-shared-forms.module';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TaigaSharedFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Contacto {
  private static readonly telefonoEspanol = /^(?:\+34)?[6789]\d{8}$/;

  readonly estado = signal<'inicial' | 'enviando' | 'enviado' | 'error'>(
    'inicial'
  );

  private readonly alertas = inject(TuiAlertService);

  normalizarTelefono(event: Event): void {
    const input = event.target as HTMLInputElement;
    const conPrefijo = input.value.startsWith('+');
    const digitos = input.value.replace(/\D/g, '');

    input.value = `${conPrefijo ? '+' : ''}${digitos}`.slice(0, 12);
    input.setCustomValidity(
      input.value && !Contacto.telefonoEspanol.test(input.value)
        ? 'Introduce un teléfono español válido: 612345678 o +34612345678.'
        : ''
    );
  }

  async enviar(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const datos = new URLSearchParams();
    new FormData(form).forEach((valor, campo) => {
      datos.append(campo, String(valor));
    });

    this.estado.set('enviando');

    try {
      const respuesta = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: datos.toString(),
      });

      if (!respuesta.ok) {
        throw new Error(`Error al enviar el formulario: ${respuesta.status}`);
      }

      form.reset();
      this.estado.set('inicial');
      this.alertas
        .open('Hemos recibido tu mensaje. Te responderemos lo antes posible.', {
          appearance: 'positive',
          label: '¡Formulario enviado!',
          autoClose: 6_000,
        })
        .subscribe();
    } catch {
      this.estado.set('inicial');
      this.alertas
        .open('No se pudo enviar el formulario. Vuelve a intentarlo más tarde.', {
          appearance: 'negative',
          label: 'Ha ocurrido un error',
          autoClose: 6_000,
        })
        .subscribe();
    }
  }
}
