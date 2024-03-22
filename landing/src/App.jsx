import style from './App.module.css'
import Menu from './components/Menu'

export default function App() {

  return (
    <div className={style['wrap-principal']}>
      <Menu/>
      <h1 className={style.firstPageHeading}>Bem vindo a página de aprendizado!</h1>
    </div>
  )
}


