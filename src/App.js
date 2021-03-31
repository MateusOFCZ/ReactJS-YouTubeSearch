import React, { Component } from 'react';
import api from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      search: ''
    }
  }

  myChangeHandler = (event) => {
    this.setState({search: event.target.value});
    this.componentDidMount();
  }

  async componentDidMount() {
    const response = await api.get(this.state.search);

    console.log(response.data.items);

    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div>
        <div class="Header">
          <p class="Title">YouTube Search</p>
          <input type="text" placeholder="Procure por um título..." onChange={this.myChangeHandler}></input>
        </div>
        <div class="wrapper">
        {this.state.videos.map(video => (
          <div class="row">
            <div class="col Lista_Videos" key={video.snippet.title}>
              <div class="card">
                <img class="card-img-top" src={video.snippet.thumbnails.high.url}></img>
                <div class="card-body">
                  <h4 class="card-title">{video.snippet.title}</h4>
                  <p class="card-text">{video.snippet.description}</p>
                  <a href={'https://www.youtube.com/watch?v=' + video.id.videoId} class="btn btn-danger">Assistir Vídeo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;