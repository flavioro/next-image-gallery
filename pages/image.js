import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

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

    this.images = [
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_default.jpg`,
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1.jpg`,
        description: 'Custom class for slides & thumbnails'
      },
    ];

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
