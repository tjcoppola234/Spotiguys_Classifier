import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/MF_Doom_The_Arches_1_(headshot).jpg"} alt="MF DOOM headshot -  Wikimedia Commons" width={300} height={270}/>
        <h1>Spotiguys Classifier</h1>
        <p>Enter the Spotify share link for a song and see who is most likely to send it...</p>
        <p>(Ex: https://open.spotify.com/track/0QRxtcxL31dRAeiUUuENPu?si=6ca09b3b542c4289) </p>
        <input type="text"></input>
        <button type="button">Submit</button>
      </header>
    </div>
  );
}

export default App;
