// taiga-shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Taiga UI standalone components
import {
  TuiButton,
  TuiTextfield,
  TuiSelect,
  TuiHint,
  TuiError,
  TuiLabel,
  TuiTitle,
  TuiIcon,
  TuiLink,
  TuiAppearance,
} from '@taiga-ui/core';
import {
  TuiCheckbox,
  TuiFieldErrorPipe,
  TuiInputChipComponent,
  TuiTextarea,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/legacy';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Taiga UI
    TuiForm,
    TuiButton,
    TuiSelect,
    TuiCheckbox,
    TuiTextarea,
    TuiInputChipComponent,
    TuiError,
    TuiLabel,
    TuiFieldErrorPipe,
    TuiInputModule,
    TuiTitle,
    TuiInputPhoneModule,
    TuiIcon,
    TuiLink,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    ...TuiTextfield,
    ...TuiHint,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Taiga UI
    ...TuiTextfield,
    ...TuiHint,

    TuiFieldErrorPipe,
    TuiLabel,
    TuiForm,
    TuiError,
    TuiButton,
    TuiSelect,
    TuiTitle,
    TuiCheckbox,
    TuiTextarea,
    TuiInputChipComponent,
    TuiInputPhoneModule,
    TuiInputModule,
    TuiIcon,
    TuiLink,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
  ],
})
export class TaigaSharedModule {}
