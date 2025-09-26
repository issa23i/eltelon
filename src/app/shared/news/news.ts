import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TuiButton, TuiTitle, TuiHeader],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {}
