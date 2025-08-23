import { Component } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-hazte-socio',
  imports: [TaigaSharedModule, Contacto],
  templateUrl: './hazte-socio.html',
  styleUrls: ['./hazte-socio.scss'],
})
export class HazteSocio {}
