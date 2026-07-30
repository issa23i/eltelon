import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  readonly enviado =
    inject(ActivatedRoute).snapshot.queryParamMap.get('enviado') === 'true';
}
