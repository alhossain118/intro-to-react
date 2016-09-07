
import React, { Component } from 'react';//go find the react libary and assign it to the variable react
import ReactDOM from 'react-dom';//react-dom to render the component to the html
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';//the dot slash indicates of directing my own files
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD1na-PHnHUSzNDoibdsblFYqZUZKLyjto';

// YTSearch({key: API_KEY, term: 'one piece'}, data => {
//   console.log('data', data);
// })

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos:[],
      selectedVideo: null
     };
//this.setState({videos:videos});
    YTSearch({key: API_KEY, term: 'one piece'}, videos => {
      this.setState({
        videos: videos,
      selectedVideo:videos[0]
      })
    })
  }

  render(){

  return (
  <div>
    <Searchbar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
      onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}  
      videos={this.state.videos} />
  </div>
    )
  }
}




//Take the component's generated HTMl and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); //
// ReactDOM.render(<App />, document.querySelector('.container'));
