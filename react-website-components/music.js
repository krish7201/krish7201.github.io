function Music({ className }) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <section className={`${className || ''}`} style={{position: "relative", width: "100%", maxWidth: "800px", margin: "0 auto", zIndex: 1}}>

            {/* Spinner — shown until iframe loads */}
            {!loaded && (
                <div className="d-flex justify-content-center align-items-center w-100 bg-dark rounded"
                    style={{aspectRatio: "16/9"}}>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* iframe — always rendering, just invisible until ready */}
            <iframe
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: loaded ? "static" : "absolute",
                    top: 0,
                    left: 0,
                    visibility: loaded ? "visible" : "hidden"
                }}
                src="https://www.youtube.com/embed/pdz2e7y1xHo?si=jVbWLs13qVeqOA-u"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setLoaded(true)}
            />

        </section>
    );
}