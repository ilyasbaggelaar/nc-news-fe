import {Link} from 'react-router-dom'

function Header() {

    return (
        <header>
            <nav>
                <h1>NC-News</h1>
                <Link to="/">Home</Link> | <Link to="/topics">Topics</Link>
            </nav>
        </header>
    )
}

export default Header