import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FairHelperComponent } from './fair-helper/fair-helper.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from 'src/material-module';

@NgModule({
  declarations: [
    AppComponent,
    FairHelperComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
