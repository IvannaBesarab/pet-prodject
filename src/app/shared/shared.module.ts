import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssembledMaterialModule } from './assembled-material/assembled-material.module';

@NgModule({
  imports: [
    CommonModule,
    AssembledMaterialModule
  ],
  exports: [ AssembledMaterialModule ]
})
export class SharedModule { }
