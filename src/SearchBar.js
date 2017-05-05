import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';

// JC: This one extends PureComponent where Results extends Component
//     what's the difference?
class SearchBar extends PureComponent {
  // JC: "static" here should be thought about in a Java like manner?
  //     Then it's available "on the class" which is how something reflects
  //     on its value in order to verify the case?
  //
  //     Does this happen @ runtime in prod environments?
  //     If so, what's the cost of the type checking?
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  // JC: Is the key a react thing or a DOM thing? It'd be really nice
  //     if React wrapped the insanity of DOM key events.
  handleKeyPress (self, event) {
    if (event.key === 'Enter') self.props.handleSearch(event);
  }

  render () {
    return (
      <div>
        {/*
          - ITG: wait... bind(null)?
          -      why are we passing this on this one, but not the other?
          - JC:  Did you purposely do this differently from Layout's handleSearch
          -      method? If so, what's the purpose? Maybe I still don't understand
          -      what it does, but it seems like you should choose one or the other
          -      otherwise, everyone is going to be super confused.
          -      it seems to me that the way in Layout is better because I
          -      expect that's how it was intended to be used, so it will
          -      more naturally make sense. If you're just trying to show what
          -      happens when you pass `null`, then probably choose an example
          -      where you aren't passing `this` as an arg.
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
