import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Layout from './Layout';

const rootEl = document.getElementById('root');

const render = function (Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

render(Layout);

if (module.hot) {
  module.hot.accept('./Layout', () => {
    const NextRoot = require('./Layout').default;
    return render(NextRoot);
  });
}
