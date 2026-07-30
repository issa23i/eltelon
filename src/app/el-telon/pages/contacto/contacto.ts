import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
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
  readonly estado = signal<'inicial' | 'enviando' | 'enviado' | 'error'>(
    'inicial'
  );

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
      this.estado.set('enviado');
    } catch {
      this.estado.set('error');
    }
  }
}
