import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';

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
        <input
          type='text'
          onKeyPress={this.handleKeyPress.bind(null, this)}
        />
      </div>
    );
  }
}

export default SearchBar;
