import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galeria {
  @ViewChild('dialogTemplate', { static: true })
  dialogTemplate!: TemplateRef<any>;

  dialogService = inject(TuiDialogService);

  images = [
    {
      src: 'assets/img/ENSAYO1.jpeg',
      alt: 'Ensayo 1',
      caption: 'Primera lectura',
    },
    {
      src: 'assets/img/ENSAYO2.jpg',
      alt: 'Ensayo 2',
      caption: 'Concentración antes del ensayo',
    },
    {
      src: 'assets/img/ENSAYO3.jpeg',
      alt: 'Ensayo 3',
      caption: 'Conociendo el personaje',
    },
  ];

  verImagen(img: { src: string; alt: string; caption: string }): void {
    this.dialogService
      .open(this.dialogTemplate, {
        label: img.alt,
        data: img,
        size: 'l',
      })
      .subscribe();
  }
}
