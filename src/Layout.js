import React, {PureComponent} from 'react';

// I've setup webpack to use relative paths from the src/ directory
import Results   from 'Results';
import SearchBar from 'SearchBar';

// What is a PureComponent?
class Layout extends PureComponent {
  // constructor receives props
  // should we explain props?
  // I need props explained to me.
  constructor (props) {
    super(props);

    // setting initial state in the constructor
    this.state = {searchTerm: ''};
  }

  handleSearch (event) {
    event.preventDefault();
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
