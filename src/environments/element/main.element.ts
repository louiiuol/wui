import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { environment } from '../dev/environment'
import {ElementsWrapperModule} from '../../app/elements-wrapper'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(ElementsWrapperModule).catch(err => console.error(err))
