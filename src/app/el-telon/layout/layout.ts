import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {
 

  currentYear = new Date().getFullYear();
}
