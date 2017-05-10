import React, {PureComponent} from 'react';

// I've setup webpack to use relative paths from the src/ directory
import Results   from 'Results';
import SearchBar from 'SearchBar';

// What is a PureComponent?
class Layout extends PureComponent {
  // constructor receives props
  // Please explain props
  constructor (props) {
    super(props);

    // setting initial state in the constructor
    this.state = {searchTerm: ''};
  }

  handleSearch (event) {
    event.preventDefault();
    // When would I assign to this.state instead of calling ``this.setState`?
    // I presume that `setState` watches/notifies for changes, but I'm equally
    // curious as to why we don't use it in the constructor.
    this.setState({searchTerm: event.target.value});
  }

  render () {
    return (
      <div>
        {/*
          - Why do we bind handleSearch?
          - What does bind do?
          */}
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <Results searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default Layout;
