import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';
//What is PureComponent?
class SearchBar extends PureComponent {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  handleKeyPress (self, event) {
    if (event.key === 'Enter') self.props.handleSearch(event);
  }

  render () {
    return (
      <div>
        {/*
          - wait... bind(null)?
          - why are we passing this on this one, but not the other?
           */}
        <input
          type='text'
          onKeyPress={this.handleKeyPress.bind(null, this)}
        />
      </div>
    );
  }
}

export default SearchBar;
