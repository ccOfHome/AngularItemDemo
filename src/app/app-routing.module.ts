import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLoginComponent } from './app-login/app-login.component';
import { AppListComponent } from './app-list/app-list.component';

const appRoutes: Routes = [
  { path: 'login', component: AppLoginComponent},
  { path: 'list', component: AppListComponent },
  // { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
