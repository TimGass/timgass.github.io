import React from 'react';
import {
  createHashRouter,
  Navigate,
  RouterProvider,
  Routes,
  Route
} from 'react-router-dom';
import $ from 'jquery';
import projectList from './projectList';

import About from './about';
import Skills from './skills';
import ScrollToTop from './scrollToTop.js';
import PortfolioPage from './portfolioPage.js';
import Projects from './projects.js';

class Router extends React.Component {
  scrollBarHandler({ bounds }) {
    let width = bounds.width;
    let height = $(window).height();
    let footer = $('footer.footer').outerHeight();
    let page = bounds.height - footer;
    let tab = $('div.scrollbarThumb').height();

    const scrollHandler = () => {
      if (height !== window.innerHeight || width !== window.innerWidth) {
        width = $(window).width();
        height = $(window).height();
        footer = $('footer.footer').outerHeight();
        page = $('body').height() - footer;
        tab = $('div.scrollbarThumb').height();
      }
      const top = $(window).scrollTop();
      if (!isNaN(top)) {
        const percentage = top / (page - height);
        const position = top + percentage * height;
        const backgroundColor = $('div.scrollbarThumb').css('background-color');
        const arrowDisplay = $('img.arrow-down').css('display');
        if (
          position <= height - tab &&
          backgroundColor !== 'rgba(255, 255, 255, 0.3)'
        ) {
          $('div.scrollbarThumb').css(
            'background-color',
            'rgba(255, 255, 255, 0.3)'
          );
          if (top <= 0 && arrowDisplay === 'none') {
            $('img.arrow-down').css({ display: 'inline-block' });
          }
        } else if (percentage <= 1) {
          $('div.scrollbarThumb').offset({ top: position });
          if (
            backgroundColor === 'rgba(255, 255, 255, 0.3)' &&
            position > height - tab
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(0, 0, 0, 0.7)'
            );
          }
          if (top <= 0 && arrowDisplay === 'none') {
            $('img.arrow-down').css({ display: 'inline-block' });
          } else if (arrowDisplay === 'inline-block' && top > 0) {
            $('img.arrow-down').css({ display: 'none' });
          }
        } else {
          $('div.scrollbarThumb').css('background-color', 'rgba(0, 0, 0, 0.7)');
          $('div.scrollbarThumb').offset({ top: page - tab });
        }
      }
    };

    const dragHandler = event => {
      const position = event.pageY;
      if (!isNaN(position)) {
        const percentage = position / page;
        const top = height * -percentage + position;
        const backgroundColor = $('div.scrollbarThumb').css('background-color');
        const arrowDisplay = $('img.arrow-down').css('display');
        if (percentage <= 1 && position > 0) {
          $('div.scrollbarThumb').offset({ top: position });
          $(window).scrollTop(top);
          if (arrowDisplay === 'none' && top <= 0) {
            $('img.arrow-down').css({ display: 'inline-block' });
          } else if (arrowDisplay === 'inline-block' && top > 0) {
            $('img.arrow-down').css({ display: 'none' });
          }
          if (
            backgroundColor !== 'rgba(255, 255, 255, 0.3)' &&
            position <= height - tab
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(255, 255, 255, 0.3)'
            );
          } else if (
            backgroundColor !== 'rgba(0, 0, 0, 0.7)' &&
            position > height - tab
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(0, 0, 0, 0.7)'
            );
          }
        }
      }
    };

    const releaseHandler = event => {
      $('html').css('scroll-behavior', 'smooth');
      $(document).off();
      $(window).scroll(scrollHandler);
      const position = event.pageY;
      if (!isNaN(position)) {
        const percentage = position / page;
        const top = height * -percentage + position;
        const backgroundColor = $('div.scrollbarThumb').css('background-color');
        const arrowDisplay = $('img.arrow-down').css('display');
        if (
          position <= height - tab &&
          backgroundColor !== 'rgba(255, 255, 255, 0.3)' &&
          position > 0
        ) {
          $('div.scrollbarThumb').css(
            'background-color',
            'rgba(255, 255, 255, 0.3)'
          );
          $(window).scrollTop(top);
        } else if (percentage <= 1 && percentage > 0 && position > 0) {
          $('div.scrollbarThumb').offset({ top: position });
          $(window).scrollTop(top);
          if (
            backgroundColor !== 'rgba(0, 0, 0, 0.7)' &&
            position > height - tab
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(0, 0, 0, 0.7)'
            );
          } else if (
            backgroundColor !== 'rgba(255, 255, 255, 0.3)' &&
            position <= height - tab
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(255, 255, 255, 0.3)'
            );
          }
        } else if (position < page / 2) {
          if (arrowDisplay === 'none' && top <= 0) {
            $('img.arrow-down').css({ display: 'inline-block' });
          }
          $('div.scrollbarThumb').offset({ top: 0 });
          $(window).scrollTop(0);
          $('div.scrollbarThumb').css(
            'background-color',
            'rgba(255, 255, 255, 0.3)'
          );
        } else if (position >= page / 2) {
          if (arrowDisplay === 'inline-block' && top > 0) {
            $('img.arrow-down').css({ display: 'none' });
          }
          $(window).scrollTop(page);
          $('div.scrollbarThumb').offset({ top: page - tab });
          $('div.scrollbarThumb').css('background-color', 'rgba(0, 0, 0, 0.7)');
        }
      }
    };

    const clickHandler = event => {
      $('html').css('scroll-behavior', 'auto');
      if (height !== window.innerHeight || width !== window.innerWidth) {
        width = $(window).width();
        height = $(window).height();
        footer = $('footer.footer').outerHeight();
        page = $('body').height() - footer;
        tab = $('div.scrollbarThumb').height();
      }
      event.preventDefault();
      $(window).off();
      $(document).mouseup(releaseHandler);
      $(document).mousemove(dragHandler);
    };

    $(window).off();
    $(document).off();
    $('div.scrollbarThumb').off();
    scrollHandler();
    if ($('div.scrollbarThumb').css('display') !== 'none') {
      $(window).scroll(scrollHandler);
      $('div.scrollbarThumb').mousedown(clickHandler);
    }
  }

  render() {
    let currentRouter = createHashRouter([
      {
        path: "*",
        element: <Navigate to="/portfolio" />
      },
      {
        path: "/about",
        element: <About bounds onResize={this.scrollBarHandler} />,
      },
      {
        path: "/skills",
        element: <Skills bounds onResize={this.scrollBarHandler} />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage bounds onResize={this.scrollBarHandler} />,
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioPage bounds onResize={this.scrollBarHandler} />,
      }
    ]);
    return (<><ScrollToTop /><RouterProvider router={currentRouter} /></>);
  }
}

export default Router;
