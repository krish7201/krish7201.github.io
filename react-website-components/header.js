function Header() {
    const { currentPage, setCurrentPage } = useApp();

    return (
        <header>
        <h1 className="flex-fill text-center mt-2">
            krish7201
        </h1>
            <Navigation></Navigation>
        </header>
    );
}

function Navigation() {
    const { currentPage, setCurrentPage } = useApp();

    return (
        <nav className="nav nav-tabs">
            <a 
                className={`flex-fill nav-link text-center ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
            >
                Home
            </a>
            <a 
                className={`flex-fill nav-link text-center ${currentPage === 'gallery' ? 'active' : ''}`}
                onClick={() => setCurrentPage('gallery')}
            >
                Art
            </a>
            <a 
                className={`flex-fill nav-link text-center ${currentPage === 'music' ? 'active' : ''}`}
                onClick={() => setCurrentPage('music')}
            >
                Music
            </a>
        </nav>
    );
}
