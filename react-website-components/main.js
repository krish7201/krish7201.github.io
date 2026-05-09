function Main() {
    React.useEffect(() => {
        particlesJS('particles-bg', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                opacity: { value: 0.3, random: true },
                size: { value: 0.5, random: true },
                line_linked: {
                    enable: true,
                    random: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.3,
                    width: 0.5
                },
                move: { enable: true, speed: 0.5 }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: false},
                    onclick: { enable: true, mode: 'repulse'}
                }
            }
        });

        return () => {
            // Destroy the instance on unmount to prevent canvas accumulation
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, []);

    return (
        <main className="flex-grow-1 d-flex align-items-center justify-content-center" style={{position: "relative"}}>

            {/* Particle canvas — fills the main area, sits behind content */}
            <div id="particles-bg" aria-hidden="true" style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                zIndex: 0
            }}></div>

            <Content />

            <small className="text-secondary" style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                padding: "4px",
                fontSize: "0.7rem",
                whiteSpace: "nowrap",
                pointerEvents: "none"
            }}> Particle effect by{" "}
                <a href="https://vincentgarreau.com/particles.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary"
                    style={{pointerEvents: "auto"}}>
                    Vincent Garreau
                </a>
            </small>
        </main>
    );
}

function Content() {
    const { currentPage } = useApp();
    const [visited, setVisited] = React.useState(() => new Set([currentPage]));

    React.useEffect(() => {
        setVisited(prev => new Set(prev).add(currentPage));
    }, [currentPage]);

    return (
    <React.Fragment>
        {visited.has('home')    && <Home    className={currentPage === 'home'    ? '' : 'page-hidden'} />}
        {visited.has('gallery') && <Gallery className={currentPage === 'gallery' ? '' : 'page-hidden'} />}
        {visited.has('music')   && <Music   className={currentPage === 'music'   ? '' : 'page-hidden'} />}
    </React.Fragment>
);
}