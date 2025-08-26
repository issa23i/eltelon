import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaigaSharedModule } from '../../../shared/taiga-shared.module';
import { Item } from '../../../../interfaces/tarjetas.interface';
import {
  TuiResponsiveDialog,
  TuiResponsiveDialogOptions,
} from '@taiga-ui/addon-mobile';
import { TuiCardLarge } from '@taiga-ui/layout';
import { items } from './items';

@Component({
  selector: 'app-quienes-somos',
  imports: [TaigaSharedModule, TuiResponsiveDialog, TuiCardLarge],
  templateUrl: './quienes-somos.html',
  styleUrls: ['./quienes-somos.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuienesSomos {
  protected readonly routes: any = {};
  protected open = false;

  items = items;

  selected: Item = this.items[0];

  opened(item: Item) {
    this.selected = item;
    console.log(item.buttonLabel);
    return true;
  }

  get options(): Partial<TuiResponsiveDialogOptions> {
    return {
      label: this.selected.buttonLabel,
      size: 's',
    };
  }
}
