import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule
} from '@angular/material';

const importedModules = [
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule
];

@NgModule({
  imports: [
    CommonModule,
    ...importedModules
  ],
  exports: [ ...importedModules ]
})
export class AssembledMaterialModule { }
