import React from 'react';

class GifSearch extends React.Component {
  state = {
    query: ''
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.query} onChange = {(ev) =>
          this.setState({query: ev.target.value})} />
          </form>
      </div>
    )
  }
}

export default GifSearch;
