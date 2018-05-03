import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        this.name: 'name',
        this.artist: 'artist',
        this.album: 'album',
        this.id: 'id'],
      playlistName: 'Bills Playlist',
      playlistTracks: [
          this.name: 'name',
          this.artist: 'artist',
          this.album: 'album',
          this.id: 'id'
      ]};
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);

  }

    addTrack(track){
      let myVar = this.state.playlistTracks;
      if (myVar.find(savedTrack => savedTrack.id === track.id)) {
        return;
} else {
  myVar.push(track.id)
  this.setState({
    name: track.name,
    artist: track.artist,
    album: track.album,
    id: track.id
  })
}
    }

    removeTrack(track){
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      } else {
        this.setState({
          name: track.name,
          artist: track.artist,
          album: track.album,
          id: track.id
        })
      }
    }

    updatePlaylistName(name){
      this.setState({
        playlistName: name
      })
    }

    savePlaylist(){
      const trackURIs = this.state.playlistTracks.map()
    }

    search(term){
      console.log(term)
    }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()}/>
                <Playlist savePlaylist={this.savePlaylist} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack()} onNameChange={this.updatePlaylistName()}/>
              </div>
            </div>
      </div>
    );
  }
}

export default App;