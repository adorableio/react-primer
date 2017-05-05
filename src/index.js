// JC: Can you talk about what import is and when you can use it?
//     I definitely hit situations where my code would break if I used it,
//     then later at some point it would break if I didn't use it,
//     then I changed something and I had ot use it again >.<
//     This is the new style, though, right? So where it's available,
//     we should prefer it over requrie? And I'm guessing it's available
//     because of something in babel somewhere?
//     (is this the .babelrc we're using? https://github.com/itsthatguy/itg-react-scripts/blob/e5b3dfd9a45c5891eb873f759fa9ca36a0c891f6/.babelrc)
//     A 1-sentence explanation of why it exists would be nice
//     (IIRC, it was something like providing an ability to statically analyze
//     dependencies because it's a keyword instead of a method which can be
//     modified at runtime, and then the static analysis could be used by webpack
//     and compilers and things for DCE, live reloading, etc)
import React    from 'react';
import ReactDOM from 'react-dom';

import Layout   from './Layout';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Layout />,
  rootEl
);
