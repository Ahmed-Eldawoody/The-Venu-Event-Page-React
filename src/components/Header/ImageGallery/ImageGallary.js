import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/350/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/350/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/350/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/1000/350",
    thumbnail: "https://picsum.photos/250/150"
  }
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={1500}
      />
    );
  }
}

export default MyGallery;
