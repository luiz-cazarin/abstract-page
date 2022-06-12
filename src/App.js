import './App.css';
import logo from './models/img/logo.png'
import artZeus from './models/img/Zeus.png'


// homepage
function App() {
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='menu'>
          <ul>
            <li>home</li>
            <li>projects</li>
            <li>contacts</li>
            <li>about</li>
          </ul>
        </div>
      </div>
      <div className='body'>
        <div className='content'>
          <div className='content-text'>
            <div>
              <h4>Bem vindo</h4>
              <h1>SOFTWARE DEVELOPER</h1>
              <h3>Olá, meu nome e luiz claudio e eu desenvovi esse site com objetivo de mostrar minhas abilidades com desenvolvimento web responsivo, todo projeto esta disponivel no github.</h3>
              <div className='buttons'>
                <button>PROJECTS</button>
                <button>ABOUT</button>
              </div>
            </div>
          </div>
          <div className='content-art'>
            <img src={artZeus} alt='art'/>
          </div>
        </div>
      </div>
      <div className='footer'>
      <p>Luiz Claudio</p>
      </div>
    </>
  );
}

export default App;
