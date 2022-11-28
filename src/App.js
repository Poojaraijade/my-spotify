import './App.css';

function App() {

  const recentReleases = [
    {
      name: 'Recent Song 1',
      img: 'https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588'
    },
    {
      name: 'Recent Song 2',
      img: 'https://i.scdn.co/image/ab67706f00000002a7c87745d3b0f192d0e23556'
    }
  ];
  const featuredReleases = [
    {
      name: 'Featured playlist 1',
      img: 'https://i.scdn.co/image/ab67706f000000026532a0c7c8aa3e40a5851d8c'
    },
    {
      name: 'Featured playlist 2',
      img: 'https://i.scdn.co/image/ab67706f00000002b5d03b4eccf9aa6b902d0666'
    }
  ]

  return (
    <div className="App">
      <div className="row">
        <div className="col-3 left" style={{color: 'white'}}>
          <div className="row" style={{height: '100vh', backgroundColor: 'blue'}}>
            <div className="col align-self-center" style={{paddingLeft: '5rem'}}>
              <div>Home</div>
              <div>Search</div>
              <div>Favourites</div>
              <div>Playlists</div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row top" style={{height: '30vh', backgroundColor: 'red', color: 'white'}}>
            <span className="float-right" style={{fontSize: "2rem"}}>
              Your favourite tunes, all day and all night
            </span>
          </div>
          <div className="row bottom">
            <div className="p-2">Recent Releases</div>
            <div className="d-flex">
              {recentReleases.map(m => (
                  <div className="d-grid pe-3">
                    <img src={m.img} width="100px" height="100px"/>
                    {m.name}
                  </div>
              ))}
            </div>
          </div>
          <div className="row bottom">
            <div className="p-2">Featured Playlists</div>
            <div className="d-flex">
              {featuredReleases.map(m => (
                  <div className="d-grid pe-3">
                    <img src={m.img} width="100px" height="100px"/>
                    {m.name}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
