import React, {PureComponent} from 'react';

// ITG: I've setup webpack to use relative paths from the src/ directory
//
// JC: Is there an advantage to this? I feel like it makes it hard
//     to look at an import and know whether it's coming from our
//     code or a package.
import Results   from 'Results';
import SearchBar from 'SearchBar';

// ITG: What is a PureComponent?
class Layout extends PureComponent {
  // ITG: constructor receives props
  //      should we explain props?
  //
  // JC: Prob worth mentioning it, but I don't think you
  //     need to spend a long time on it unless they have magical behaviour
  //     I guess they kind of do, right? They map syntacitcally
  //     to HTML element attributes, right? If so, then there's
  //     some mismatch, eg "className" instead of "class", possibly
  //     capitalization issues and kebob-case vs camelCase.
  //     By magical, though, I'm mostly interested in verifying that
  //     I can think of them here the same way I would think of any other
  //     JS object.
  //
  //     I suppose also, a quick explanation of the differences between props and state
  //     eg why would I ever use state, given I have props. And if I do use state,
  //     then are props just a mechanism for passing me a value? And if not,
  //     then I'm using both state and props, how do I know which one I want?
  constructor (props) {
    super(props);

    // ITG: setting initial state in the constructor
    // JC:  This probably works b/c the app is sufficiently small
    //      Maybe not right for a primer, but I'd like to see your approach
    //      to state management in a larger app. Assuming it's flux, I think
    //      I'd like to see an example. Esp where the same data is best
    //      accessed via different data structures in different places.
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
          - ITG: Why do we bind handleSearch?
          -      What does bind do?
          -
          - JC:  Yes, talk about this, pls. Eg I believe that
          -      passing a fn literal here means it will look
          -      like it has changed and force a re-render.
          -      it looks like this gets around that while still
          -      addressing the ontological crisis of `this` binding.
          -      I'd like a mechanical explanation of how it addresses
          -      the problems of the other approaches
          */}
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <Results searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default Layout;
