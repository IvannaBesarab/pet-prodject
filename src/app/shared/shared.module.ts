import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssembledMaterialModule } from './assembled-material/assembled-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedModules = [
    FlexLayoutModule,
    AssembledMaterialModule,
    FormsModule,
    ReactiveFormsModule,
];

@NgModule({
    imports: [
        CommonModule,
        ...sharedModules
    ],
    exports: [
        ...sharedModules
    ]
})
export class SharedModule {
}
