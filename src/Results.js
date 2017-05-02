import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import axios              from 'axios';

const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = 'dc6zaTOxFJmzC';

class Results extends Component {
  constructor (props) {
    super(props);

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

  search (props) {
    const {searchTerm} = props;
    if (searchTerm.length === 0) return;

    this.setState({searching: true});

    axios.get(`${GIPHY_URL}${searchTerm}&api_key=${API_KEY}`)
    .then((response) => {
      this.setState({
        gifs: response.data,
        searching: false,
      });
    });

  }

  render () {
    const {searchTerm} = this.props;
    if (!searchTerm || searchTerm.length === 0) return null;

    const {gifs, searching} = this.state;
    if (searching) return <p>Searching...</p>;

    const gifsList = gifs.data.map((gif) => {
      return <li key={gif.id}><img src={gif.images.fixed_height_small.url} /></li>;
    });

    return <ul>{gifsList}</ul>;
  }
}

export default Results;
