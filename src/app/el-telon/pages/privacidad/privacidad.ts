import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';

@Component({
  selector: 'app-privacidad',
  imports: [TaigaSharedModule],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Privacidad {}
