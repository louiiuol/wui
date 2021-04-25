import { Injector, NgModule } from '@angular/core'
import { createCustomElement } from '@angular/elements'

import {CommonModule} from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

/**
 * Wrapper module for every Angular Elements components.
 * This module is used as Global Container when running `npm run build:elements`
 */
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule],
  declarations: [],
  providers: [],
  exports: []
})
export class ElementsWrapperModule {

  constructor(private injector: Injector) {}

  /**
   * defines Player component as Angular Element which can be used
   * everywhere as a HtmlElement (while keeping angular utilities)
   */
  ngDoBootstrap() {
    // const player = <any>createCustomElement(Component, {
    //   injector: this.injector,
    // })
    // customElements.define('componentName', player)
  }

}
