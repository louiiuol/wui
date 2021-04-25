import { Component } from '@angular/core'

/**
 * Root component demonstrating Angular Element components
 */
@Component({
  selector: 'app-root',
  template: `wui init ...`,
})
export class AppComponent {

  options = {
    // autoplay: true, // uncomment to enable autoplay
    controls: true,
    playbackRates: [1, 2, 4],
    aspectRatio: '16:9'
  }

  constructor() {}

}
