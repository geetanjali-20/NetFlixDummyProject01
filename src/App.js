// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
      <div className="App">
       {/* {Navbar} */}
       <Nav/>
       {/* {Banner} */}
       <Banner/>
       {/* {Rows} */}
        <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy MOvies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romentic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documenteries" fetchUrl={requests.fetchDocumentries} />


      </div>
  );
}

export default App;
