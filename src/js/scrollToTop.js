import React from 'react';

class ScrollToTop extends React.Component {
  componentDidUpdate() {
    if ((window.location.hash.match(new RegExp('/', 'g')) || []).length < 2) {
      window.scrollTo(0, 0);
    }
    if (window.innerWidth > 1920 && window.innerHeight > 1080) {
      window.resizeTo(1920, 1080);
      window.focus();
    }
  }

  render() {
    return null;
  }
}

export default ScrollToTop;
