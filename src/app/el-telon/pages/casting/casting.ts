import { Component } from '@angular/core';
import { Contacto } from '../contacto/contacto';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { CommonModule } from '@angular/common';
import { News } from '../../../shared/news/news';

@Component({
  selector: 'app-casting',
  standalone: true,
  imports: [CommonModule, TuiTitle, TuiHeader, Contacto, News],
  templateUrl: './casting.html',
  styleUrls: ['./casting.scss'],
})
export class Casting {}
