function GalleryImage({ src, alt, caption }) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <div style={{ position: "relative", aspectRatio: "1" }}>
            {!loaded && (
                <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-dark rounded"
                    style={{ position: "absolute", top: 0, left: 0 }}>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <img
                className="img-fluid rounded w-100"
                style={{
                    objectFit: "cover",
                    aspectRatio: "1",
                    visibility: loaded ? "visible" : "hidden"
                }}
                src={src}
                data-src={src}
                data-zoomora="my-gallery"
                alt={alt}
                data-caption={caption}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}

function Gallery({ className }) {
    React.useEffect(() => {
        const lightbox = new Zoomora();
        return () => { lightbox.destroy(); };
    }, []);

    return (
        <section className={`gallery-container container py-4 ${className || ''}`} style={{position: "relative", zIndex: 1, width: "100%"}}>
            {/* Hint + attribution row */}
            <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                <small className="text-secondary gallery-hint">
                    <i className="bi bi-hand-index me-1"></i>
                    Click or tap a photo to expand it
                </small>
                <small className="text-secondary gallery-hint">
                    Lightbox by <a href="https://www.fronttheme.com/docs/zoomora/"
                        target="_blank" rel="noopener noreferrer" className="text-secondary">
                        Zoomora
                    </a>
                </small>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div className="col"><GalleryImage src="./art/comet.png"       alt="comet"       caption="comet"       /></div>
                <div className="col"><GalleryImage src="./art/trapped.png"     alt="trapped"     caption="trapped"     /></div>
                <div className="col"><GalleryImage src="./art/watercolor.png"  alt="watercolor"  caption="watercolor"  /></div>
                <div className="col"><GalleryImage src="./art/woo.png"         alt="woo"         caption="woo"         /></div>
                <div className="col"><GalleryImage src="./art/alt-artwork.png" alt="alt-artwork" caption="alt-artwork" /></div>
                <div className="col"><GalleryImage src="./art/intense.png"     alt="intense"     caption="intense"     /></div>
                <div className="col"><GalleryImage src="./art/eye.png"         alt="eye"         caption="eye"         /></div>
            </div>
        </section>
    );
}