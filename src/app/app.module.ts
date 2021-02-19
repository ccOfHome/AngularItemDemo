import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppListComponent } from './app-list/app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
