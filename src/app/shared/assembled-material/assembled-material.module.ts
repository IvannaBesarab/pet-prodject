import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material';

const materialComponents = [
  MatToolbarModule
];


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [ MatToolbarModule ]
})
export class AssembledMaterialModule { }
