// taiga-shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Taiga UI standalone components
import {
  TuiButton,
  TuiTextfield,
  TuiSelect,
  TuiError,
  TuiLabel,
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
import { TuiForm } from '@taiga-ui/layout';
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
    TuiInputPhoneModule,
    TuiIcon,
    TuiLink,
    TuiAppearance,
    ...TuiTextfield,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Taiga UI
    ...TuiTextfield,

    TuiFieldErrorPipe,
    TuiLabel,
    TuiForm,
    TuiError,
    TuiButton,
    TuiSelect,
    TuiCheckbox,
    TuiTextarea,
    TuiInputChipComponent,
    TuiInputPhoneModule,
    TuiInputModule,
    TuiLink,
    TuiAppearance,
  ],
})
export class TaigaSharedFormsModule {}
