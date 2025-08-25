import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-aviso-legal',
  imports: [TuiTitle, TuiHeader],
  templateUrl: './aviso-legal.html',
  styleUrl: './aviso-legal.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvisoLegal {}
