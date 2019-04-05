import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {
  state={
    gifs: [],
    query: 'dog'
  }

  componentDidMount(){
    this.fetchGifs(this.state.query)
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then((gifs) => {
      console.log(gifs.data)
      const addresses = gifs.data.map(gif => ({url: gif.images.original.url})
    )
    this.setState({gifs: addresses})
    })

  }

  render() {
    return(
      <div>
      <GifSearch fetchGifs={this.fetchGifs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
export default GifListContainer
