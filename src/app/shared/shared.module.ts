import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssembledMaterialModule } from './assembled-material/assembled-material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AssembledMaterialModule,
  ],
  exports: [
    FlexLayoutModule,
    AssembledMaterialModule,
    ]
})
export class SharedModule { }
