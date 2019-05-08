import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CronEditorModule } from "cron-editor";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components
import { SignerComponent } from './components/signer/signer.component';
//Imports
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    AppComponent,
    SignerComponent,
  ],
  imports: [
    CronEditorModule,
    BrowserModule,
    DragDropModule,
    SignaturePadModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
