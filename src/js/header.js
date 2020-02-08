import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import resume from '../assets/PublicResume.pdf';

class Header extends Component {
  componentDidMount() {
    let width = $(window).width();
    let height = $(window).height();
    let footer = $('footer.footer').outerHeight();
    let page = $('body').height() - footer;
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
        const percentage = top / (page - height + tab);
        const position = top + percentage * height;
        const backgroundColor = $('div.scrollbarThumb').css('background-color');
        const arrowDisplay = $('img.arrow-down').css('display');
        if (
          position <= height &&
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
            position > height
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
          $('div.scrollbarThumb').offset({ top: page - tab });
        }
      }
    };
    $(window).scroll(scrollHandler);
    $('div.scrollbarThumb').mousedown(event => {
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
      $(document).mouseup(event => {
        $('html').css('scroll-behavior', 'smooth');
        $(document).off();
        $(window).scroll(scrollHandler);
        const position = event.pageY;
        if (!isNaN(position)) {
          const percentage = position / page;
          const top = height * -percentage + position;
          const backgroundColor = $('div.scrollbarThumb').css(
            'background-color'
          );
          const arrowDisplay = $('img.arrow-down').css('display');
          if (
            position <= height &&
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
            if (backgroundColor !== 'rgba(0, 0, 0, 0.7)' && position > height) {
              $('div.scrollbarThumb').css(
                'background-color',
                'rgba(0, 0, 0, 0.7)'
              );
            } else if (
              backgroundColor !== 'rgba(255, 255, 255, 0.3)' &&
              position <= height
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
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(0, 0, 0, 0.7)'
            );
          }
        }
      });
      $(document).mousemove(event => {
        const position = event.pageY;
        if (!isNaN(position)) {
          const percentage = position / page;
          const top = height * -percentage + position;
          const backgroundColor = $('div.scrollbarThumb').css(
            'background-color'
          );
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
              position <= height
            ) {
              $('div.scrollbarThumb').css(
                'background-color',
                'rgba(255, 255, 255, 0.3)'
              );
            } else if (
              backgroundColor !== 'rgba(0, 0, 0, 0.7)' &&
              position > height
            ) {
              $('div.scrollbarThumb').css(
                'background-color',
                'rgba(0, 0, 0, 0.7)'
              );
            }
          }
        }
      });
    });
  }
  render() {
    return (
      <header className="header">
        <div className="headerLeft">
          <NavLink to="/Portfolio" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/Skills" activeClassName="active" id="skillsLink">
            Skills
          </NavLink>
          <NavLink to="/About" activeClassName="active" id="aboutLink">
            About
          </NavLink>
        </div>
        <div className="headerRight">
          <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
            Email
          </a>
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            Resume
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
