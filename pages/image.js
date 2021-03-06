import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

import ReplaceAll from '../utils/replaceAll'
import WordsUpperCase from '../utils/wordsUpperCase' 

// const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
const PREFIX_URL = '/projetos_slides/'
const codeHouses = projs.casas
let images = []

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
    };

    // this.images = [
    //   {
    //     original: `${PREFIX_URL}image_set_default.jpg`,
    //     thumbnail: `${PREFIX_URL}image_set_default.jpg`,
    //   },
    //   {
    //     original: `${PREFIX_URL}1.jpg`,
    //     thumbnail: `${PREFIX_URL}1.jpg`,
    //     description: 'Custom class for slides & thumbnails'
    //   },
    // ];

    for (const key in codeHouses) {
      if (codeHouses.hasOwnProperty(key)) {
        const original = PREFIX_URL + codeHouses[key]
        let originalAlt = codeHouses[key]

        originalAlt = ReplaceAll(originalAlt, '-', ' ')

        originalAlt = String(originalAlt)
          .replace(key, 'ArchShop')
          .replace('.jpg', '')
          .replace('casa', 'Projeto Casa')

        originalAlt = WordsUpperCase(originalAlt)

        const item = {
          original: original,
          thumbnail: original,
          originalAlt: originalAlt,
          originalTitle: originalAlt
        }
        this.images.push(item)
      }
    }
  }

  render() {
    return (
      <section className='app'>
        <ImageGallery
          items={this.images}
        />
      </section>
    );
  }
}
