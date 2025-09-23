import { Component } from '@angular/core';
import { Contacto } from '../contacto/contacto';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casting',
  standalone: true,
  imports: [CommonModule, TuiTitle, TuiHeader, Contacto],
  templateUrl: './casting.html',
  styleUrls: ['./casting.scss'],
})
export class Casting {}
