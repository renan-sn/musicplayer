import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Music Player</h1>

        <div className="menu">
          <ul className="menu-center">
            <li><a href="">Artistas</a></li>
            <li><a href="">Albuns</a></li>
            <li><a href="">Playlists</a></li>
            <li><a href="">Generos</a></li>
            <li><a href="">Mix</a></li>
          </ul>

          <ul className="menu-right">
            <li><a href="">Registrar</a></li>
            <li><a href="">Login</a></li>
            
          </ul>
        </div>
      </header>

      <div className="app-container">
        <div className="section-left">
        <h2>Tocando agora</h2>
          
        </div>

        <div className="section-right">
          <h2>Album</h2>
          <p> Hybrid Theory é o álbum de estreia da banda americana de rock Linkin Park. 
              É o mais vendido do grupo até o momento, com cerca de mais de 30 milhões de 
              cópias comercializadas pelo mundo, sendo disco de diamante nos Estados Unidos. 
              Também está na lista dos 200 álbuns definitivos no Rock and Roll Hall of Fame.
          </p>
        </div>

      </div>
    </div>
  );
}
