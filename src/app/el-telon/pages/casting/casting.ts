import { Component } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';

@Component({
  selector: 'app-casting',
  standalone: true,
  imports: [TaigaSharedModule],
  templateUrl: './casting.html',
  styleUrls: ['./casting.scss'],
})
export class Casting {}
