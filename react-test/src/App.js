import React, { Component } from 'react';
import _ from 'lodash';
// Import youtube search API to search from youtube
import YTSearch from 'youtube-api-search';

import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB6ZSZww1oDflFM0X4yWEGVpZlJi9NQno4';



class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
          videos: [],
          selectedVideo: null
      };

      this.videoSearch('surfboards');

  }
      videoSearch(term) {
          // call to get the youtube data
          YTSearch({key: API_KEY, term: term},  (videos) => {
              console.log("data : ", videos);
              this.setState({
                  videos: videos,
                  selectedVideo: videos[0]
              });

          });
      }

  render() {
    // Added to make call every 300 ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
                videos={this.state.videos}
            />
        </div>
      </div>
    );
  }
}

export default App;

// console.developers.google.com
// AIzaSyB6ZSZww1oDflFM0X4yWEGVpZlJi9NQno4
// npm install youtube-api-search