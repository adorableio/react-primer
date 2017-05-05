import React, {Component} from 'react';
import PropTypes          from 'prop-types';

// JC: So you just had to mock this out in Gamut code, can you talk about how yo
//     do that? It doesn't look from here like you have any ability to intercept
//     calls to axios. I guess maybe the fact that it's a package allows you to
//     swap out what file it finds when it imports axios?
import axios              from 'axios';
import qs                 from 'querystring';

const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'dc6zaTOxFJmzC';

class Results extends Component {
  constructor (props) {
    super(props);

    // JC: There were definitely like 2 or 3 ways to initialize state, can you
    //     confirm that this is the current correct way?
    this.state = {
      gifs: [],
      searching: false,
    };
  }

  static propTypes = {searchTerm: PropTypes.string};

  static defaultProps = {searchTerm: ''};

  componentWillMount () {
    this.search(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.search(nextProps);
    }
  }

  // JC: prob receive searchTerm instead of props here
  search (props) {
    const {searchTerm} = props;
    // JC: I think this is the same as:
    //         if (!searchTerm) return;
    //     Annoyingly, you can't do:
    //         searchTerm || return;
    if (searchTerm.length === 0) return;

    // JC: setState does something specific, like queuing up another render
    //     or something it would be worth talking about this in particular,
    //     because the obvious thing to do is `this.state.searching = false`,
    //     but that's wrong, so it would be nice to understand why.
    //     Also, if it does do something like queue up another render,
    //     what happens if you setState several times in a row?
    //
    //     Also, the setting of state should prob happen in the callers
    //     (componentWillMount and componentWillReceiveProps), this fn
    //     could really exist with total ignorance to the fact that it's
    //     sitting in the middle of a react component. You gotta... you know...
    //     decomplect ;)~
    this.setState({searching: true});

    const searchQuery = qs.stringify({
      q: searchTerm,
      rating: 'g',
      api_key: API_KEY,
    });

    // JC: Axios doesn't give you a way to pass query params without having
    //     to render through a string?
    axios.get(`${GIPHY_URL}${searchQuery}`)
    .then((response) => {
      this.setState({
        gifs: response.data, // JC: Is there a PropTypes for state?
        searching: false,
      });
    });

  }

  render () {
    const {searchTerm} = this.props;
    if (!searchTerm || searchTerm.length === 0) // JC: the two branches of the conditional are the same
      return null;                              // JC: what does it mean to return null from a render?

    const {gifs, searching} = this.state;
    if (searching) return <p>Searching...</p>;

    // JC: You should explain why we need the ID, that confused me several times
    //     (again, I'm assuming "primer" means people don't have experience w/ it)
    const gifsList = gifs.data.map(gif =>
      <li key={gif.id}><img src={gif.images.fixed_height_small.url} /></li>);

    return <ul>{gifsList}</ul>;
  }
}

export default Results;
