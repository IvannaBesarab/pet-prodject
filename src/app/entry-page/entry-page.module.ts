import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPageRoutingModule } from './entry-page-routing.module';
import { LoginComponent } from './login/login.component';
import { EntryPageComponent } from './entry-page.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    EntryPageRoutingModule
  ],
  declarations: [ LoginComponent, EntryPageComponent, RegisterComponent]
})
export class EntryPageModule { }
