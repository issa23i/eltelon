import { Component } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-casting',
  standalone: true,
  imports: [TaigaSharedModule, Contacto],
  templateUrl: './casting.html',
  styleUrls: ['./casting.scss'],
})
export class Casting {}
