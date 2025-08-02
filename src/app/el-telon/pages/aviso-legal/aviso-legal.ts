import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';

@Component({
  selector: 'app-aviso-legal',
  imports: [TaigaSharedModule],
  templateUrl: './aviso-legal.html',
  styleUrl: './aviso-legal.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvisoLegal {}
