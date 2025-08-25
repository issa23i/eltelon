import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-privacidad',
  imports: [TuiTitle, TuiHeader],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Privacidad {}
