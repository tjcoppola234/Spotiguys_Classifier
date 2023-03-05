import { useState } from 'react';
import './App.css';

function getPlaylist() {
  fetch("https://api.spotify.com/v1/playlists/0k0NiITRLmMlAXmLQzXCZC?si=b35d0a05a73f4fa3")
    .then(res => res.json)
    .then(json => {
      console.log(json);
    })
}

function getAuth() {
  let client_id = "3fe9ea1fc74e4c71889be102b979daca";
  let redirect_uri = "https://tjcoppola234.github.io/Spotiguys_Classifier/";
  let authLink = `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(client_id)}&response_type=token&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  console.log(authLink);
}

function App() {
  const [playlist, setPlaylist] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/MF_Doom_The_Arches_1_(headshot).jpg"} alt="MF DOOM headshot -  Wikimedia Commons" width={300} height={270}/>
        <h1>Spotiguys Classifier</h1>
        <p>Enter the Spotify share link for a song and see who is most likely to send it...</p>
        <p>(Ex: https://open.spotify.com/track/0QRxtcxL31dRAeiUUuENPu?si=6ca09b3b542c4289) </p>
        <input type="text"></input>
        <button type="button" onClick={getAuth}>Submit</button>
      </header>
    </div>
  );
}

window.onload = () => {

}

export default App;
