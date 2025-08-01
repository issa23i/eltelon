import { TuiRoot } from '@taiga-ui/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, TuiRoot],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Layout {}
