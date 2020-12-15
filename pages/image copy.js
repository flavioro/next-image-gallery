import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

import ReplaceAll from '../utils/replaceAll'
import WordsUpperCase from '../utils/wordsUpperCase' 

// const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
const PREFIX_URL = '/projetos_slides/'
const codeHouses = projs.casas
const images = []

function handleImageMouseOver(e) {
  console.log(e)
}

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      hover: false
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
        images.push(item)
      }
    }

    this.toggleHover = this.toggleHover.bind(this);
  }


  
  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {
        color: '#ed1212',cursor: 'pointer'}
    } else {
      linkStyle = {color: '#000'}
    }

    return (
      <section className='app'>
        <ImageGallery className="hoverr"
          items={this.images}
          onMouseOver={this.toggleHover}
          onMouseLeave={this.toggleHover}
        />
        <p style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Test</p>
        <div className="container">
          <h1>Hello Next.js</h1>
          <p>Let's explore different ways to style Next.js apps</p>
        </div>
        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }
          .hoverr {
            top: 30px!important;
            color: blue!important;
            margin: 100px;
            padding: 100px!important;
          }
        `}</style>
      </section>
    );
  }
}
