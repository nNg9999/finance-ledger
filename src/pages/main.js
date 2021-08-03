import HomePage from './LendingPage/LendingPage.js';

import pathPage from './path';

function getCurrentPath() {
  return location.pathname;
}

function init() {
  // const header = document.getElementById('header');
  const root = document.getElementById('root');
  const path = getCurrentPath();

  switch (path) {
    case pathPage.home: {
          HomePage(root);
      break;
    }

    default: {
      break;
    }
  }
}

init();
