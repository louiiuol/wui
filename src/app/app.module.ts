import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import {ElementsWrapperModule} from './elements-wrapper'

/**
 * Wrapper container for development server.
 * This module embed {@link ElementsWrapperModule} to test while developing package
 */
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ElementsWrapperModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
