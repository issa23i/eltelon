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
    TuiTitle,
    TuiInputPhoneModule,
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
  ],
})
export class TaigaSharedModule {}
