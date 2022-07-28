
import './App.css';

// function BackgroundImage() {
//   return (
//       <div id='image-background'> </div> 
//   );
// }

function HeroComponent() {
  return (
    <div className='hero-component' id='image-background'>
      <NavBar />
      <div className="hero-content">
        <HeroTitle />
        <SearchBar />
      </div>
    </div>
  );
}

function NavBar() {

  return (

    <div>
      <img id='logo' src="https://www.drupal.org/files/project-images/pexels_logo_0.png" alt="logo" />
      <h1 id="logo-name"><a id='txt-dec' href='https://www.pexels.com'>Pexels</a></h1>
      <ul className='navbar'>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#upload">Upload</a></li>
        <li><a className='three-dots'></a></li>
        <button className='button'>Join</button>
      </ul>
    </div>



  );
}


function HeroTitle() {
  return (
    <div className='hero-title'>
      <h1 className='home-text'>The best free stock photos, royalty free images &amp; videos shared by creators.</h1>
    </div>
  );
}
function SearchBar() {
  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input type='text' placeholder='Search for free photos' />
        <button className='search-button'><i className="fa-solid fa-magnifying-glass" /></button>
      </div>
    </div>

  );
}



function App() {
  return (
    <div>
      <HeroComponent />
    </div>
  );
}



export default App;
