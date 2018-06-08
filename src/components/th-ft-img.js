import {LitElement, html} from '@polymer/lit-element';

class ThFtImg extends LitElement {

    static get properties() { return { ftTitle: String,  ftImg: String}}

    _render({ftImg, ftTitle}) {
    return html`
      <style>
        img{
          width: 100%;
          height: auto;
        } 
      </style>

      <img src=${ftImg} alt=${ftTitle}/>
      
      `;   
    }

}

customElements.define('th-ft-img', ThFtImg);