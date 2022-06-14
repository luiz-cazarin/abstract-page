import artZeus from '../../models/img/Zeus.png'
import style from './home.module.css'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <>
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.content__text}>
            <div>
              <h4>Bem vindo</h4>
              <h1>SOFTWARE DEVELOPER</h1>
              <h3>Olá, meu nome e luiz claudio e eu desenvovi esse site com objetivo de mostrar minhas abilidades com desenvolvimento web responsivo, todo projeto esta disponivel no github.</h3>
              <div className={style.buttons}>
                <Link to="/projects"><button>PROJECTS</button></Link>
                <Link to="/about"><button>ABOUT</button></Link>
              </div>
            </div>
          </div>
          <div className={style.content__art}>
            <img src={artZeus} alt='art'/>
          </div>
        </div>
      </div>
    </>
  )
}