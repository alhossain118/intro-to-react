
import React, { Component } from 'react';//go find the react libary and assign it to the variable react
import ReactDOM from 'react-dom';//react-dom to render the component to the html
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';//the dot slash indicates of directing my own files
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD1na-PHnHUSzNDoibdsblFYqZUZKLyjto';

// YTSearch({key: API_KEY, term: 'one piece'}, data => {
//   console.log('data', data);
// })

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props)

    this.state = {videos:[] };
//this.setState({videos:videos});
    YTSearch({key: API_KEY, term: 'one piece'}, videos => {
      this.setState({videos})
    })
  }

  render(){

  return (
  <div>
    <Searchbar />
    <VideoList videos={this.state.videos}/>
  </div>
    )
  }
}




//Take the component's generated HTMl and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); //
// ReactDOM.render(<App />, document.querySelector('.container'));
