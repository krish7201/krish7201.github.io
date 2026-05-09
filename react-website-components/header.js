function Header() {
    const { currentPage, setCurrentPage } = useApp();

    return (
        <header>
            <div className="d-flex align-items-center justify-content-center px-3 py-2">
                <a href="https://www.youtube.com/channel/UCkp4yGagsRUkKRHZe0gcg0A" target="_blank" rel="noopener noreferrer"
                    style={{color: "white", fontSize: "2rem", lineHeight: 1}}>
                    <i className="bi bi-youtube"></i>
                </a>
                <h1 className="name text-center mt-2 px-4">
                    krish7201
                </h1>
                <a href="https://github.com/krish7201" target="_blank" rel="noopener noreferrer"
                    style={{color: "white", fontSize: "2rem", lineHeight: 1}}>
                    <i className="bi bi-github"></i>
                </a>
            </div>
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
