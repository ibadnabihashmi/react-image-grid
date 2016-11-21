import React from 'react';
import Lightbox from 'react-images';

class Grid extends React.Component {
  constructor(){
    super();
    this.state = {
      lightboxIsOpen:false,
      currentImage:0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.triggerLightBox = this.triggerLightBox.bind(this);
  }
  triggerLightBox(index,event){
    event.preventDefault();
    this.setState({
      currentImage:index,
      lightboxIsOpen:true
    })
  }

  gotoPrevious(){
    this.setState({
      currentImage:this.state.currentImage - 1
    });
  }

  gotoNext(){
    this.setState({
      currentImage:this.state.currentImage + 1
    });
  }

  closeLightbox(){
    this.setState({
      currentImage:0,
      lightboxIsOpen:false
    });
  }
  renderGrid(){
    let images = new Array();
    let key = 0;
    this.props.images.forEach((image) => {
      var style = {
        backgroundImage:"url('"+image.src+"')"
      };
      images.push(
      <a key={key+"_a"} href="#">
        <div className="col-md-4 gallery-image" onClick={this.triggerLightBox.bind(this,key)} key={key} style={style}>
        </div>
        </a>
      );
      key++;
    });
    return images;
  }
  render(){
    return (
      <div id="Grid">
        {this.renderGrid()}
        <Lightbox
          images={this.state.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}