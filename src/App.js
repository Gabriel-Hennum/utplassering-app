import React from "react";
import './App.css';
import YoutubeEmbed from "./ytVideo";


function App() {
  return (
    <div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100hv'
    }}>
        <h1>
          pablo
        </h1>
        es el puma
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100hv'
    }}>
        <YoutubeEmbed embedId="tJpSVqmG27I" />
      </div>
    </div>
  );
}


export default App;