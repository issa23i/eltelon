// taiga-shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Taiga UI standalone components
import {
  TuiButton,
  TuiLabel,
  TuiTitle,
  TuiIcon,
  TuiLink,
  TuiAppearance,
} from '@taiga-ui/core';
import { TuiInputChipComponent } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiInputModule } from '@taiga-ui/legacy';

@NgModule({
  imports: [
    CommonModule,

    // Taiga UI
    TuiButton,
    TuiInputChipComponent,
    TuiLabel,
    TuiInputModule,
    TuiTitle,
    TuiIcon,
    TuiLink,
    TuiAppearance,
    TuiHeader,
  ],
  exports: [
    CommonModule,

    TuiLabel,
    TuiButton,
    TuiTitle,
    TuiInputChipComponent,
    TuiInputModule,
    TuiIcon,
    TuiLink,
    TuiAppearance,
    TuiHeader,
  ],
})
export class TaigaSharedModule {}
