import {LitElement, html} from '@polymer/lit-element';

class ThMusicPlayer extends LitElement {

    static get properties() { return { thumbUrl: String,  musicTitle: String}}

    _render({musicUrl, thumbUrl, ftArtist, musicTitle}) {
    return html`
      <style>
      ::host{
          display: block;
      }
      .row {
          display: flex;
      }
      .col{
        float: left;
      }
      .left{
          width: 25%;
      }
      .right{
          margin-left: 20px;
          width: 75%;
      }
      p{
        margin-top: 0;
        font-size: 11px;
      }
      h3{
          font-size: 14px;
          margin-bottom: 0;
        }
        .play{
            background-color: #444;
            color: #fff;
            font-size: 16px;
            border: none;
            width: 100%;
            padding: 5px;
        }
       
      </style>
    
      <div class="row">
        <div className="col left">
            <img src="../../images/track-cover.jpg" alt="" width="92" height="92"/>
        </div>
        <div class="col right">
            <p class="status"><em>Latest Release</em></p>
            <p class="artist">Tanzil Hasan ft. Ahaad Khan</p>
            <h3 class="title">Beche Theke Labh Ki Bol</h3>
        </div>
      </div>
      <button class="play">
          GET IT NOW
      </button>
      `; 

      {/* <img src=${thumbUrl} alt=${musicTitle}/> */}
    }

}

customElements.define('th-music-player', ThMusicPlayer);