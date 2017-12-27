import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pizza-party', loadChildren: './main-page/main-page.module#MainPageModule' },
  { path: '', loadChildren: './entry-page/entry-page.module#EntryPageModule' },
  { path: '**', redirectTo: 'pizza-party', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
