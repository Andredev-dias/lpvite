import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
            <p>
                <a href={'/'}>Home</a>
            </p>
            <p>
                <a href="">Calculations</a>
            </p>
            <p>
                <a href={'/tec'}>Tecnologies</a>
            </p>
            <p>
                <a href={'/contact'}>Contact</a>
            </p>
        </div>
    )
}