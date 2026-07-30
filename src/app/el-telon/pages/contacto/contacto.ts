import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaigaSharedFormsModule } from '../../../shared/taiga-shared-forms.module';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TaigaSharedFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Contacto {}
