import './Header.css'


export default function Header() {
    return(
        <>
        <header>
            <h1>logo</h1>
            <nav>
                <div>
                    <input type="text" placeholder="Buscar producto"/>
                    <button><i class="bi bi-search"></i></button>
                </div>
                <ul>
                    <li><a href=""> <i class="bi bi-person-circle"> Mi cuenta</i></a></li>
                    <li><a href=""><i class="bi bi-cart"></i></a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}