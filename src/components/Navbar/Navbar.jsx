import style from "./Navbar.module.scss"

export function Navbar () {
    return (
        <>
        <header>
            <nav className={style.navbarStyle}>
                <ul className={style.navbarUl}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </>
    )
}