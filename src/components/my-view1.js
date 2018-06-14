/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './th-ft-img.js';
import './th-music-player.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      .row{
        max-width: 1200px;
        margin: 0 auto;
      }
      
      @media screen and (min-width: 720px) {
        
        .row{
          display: flex;
        }
        .col{
          flex: 50%;
        }
    }
      </style>
      <div class="row">
        <div class="col cover">
        
        <section>
          <th-ft-img ftImg="../../images/track-cover.jpg" ftTitle="Track Cover Photo"></th-ft-img>
        </section>
        </div>
        <div class="col playlist">
        
        <section>
          <th-music-player></th-music-player>
        </section>
        <section>
          <th-music-player></th-music-player>
        </section>
        </div>
      </div>

    `;
  }
}

window.customElements.define('my-view1', MyView1);
