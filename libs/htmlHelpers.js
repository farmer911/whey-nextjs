import classNames from 'classnames';

let htmlHelpers = {
  toggleSidebar: toggle => { },
  scrollTop: () => { },
  storageGet: key => null,
  storageSet: (key, value) => { },
  closeMenu: () => { },
  isBrowser() {
    return typeof (window) !== 'undefined'
  }
};


if (typeof (document) !== 'undefined') {

  window.closeMenuCb = visible => { }

  htmlHelpers.toggleSidebar = toggle => {
    document.body.setAttribute('class', classNames('sidebar-mini'.adminCss(), {
      ['sidebar-open'.adminCss()]: !toggle,
      ['sidebar-collapse'.adminCss()]: toggle
    }));
  }

  htmlHelpers.scrollTop = () => {
    window.scrollTo(0, 0);
  }

  htmlHelpers.storageGet = key => {
    return localStorage.get(key);
  }

  htmlHelpers.storageSet = (key, value) => {
    localStorage.set(key, value)
  }

  htmlHelpers.closeMenu = () => {
    window.closeMenuCb(true);
    //document.getElementById(navbarDefault.idMenuDesktop).setAttribute('class', classNames(navbarDefault.desktopClassName.css(), 'd-none'.css()));
  }
}

export default htmlHelpers;