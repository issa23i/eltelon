import { Component } from '@angular/core';
import { Contacto } from '../contacto/contacto';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-casting',
  standalone: true,
  imports: [TuiTitle, TuiHeader, Contacto],
  templateUrl: './casting.html',
  styleUrls: ['./casting.scss'],
})
export class Casting {}
