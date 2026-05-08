function Gallery() {
    React.useEffect(() => {
        const lightbox = new Zoomora();

        // Cleanup when Gallery unmounts (user navigates away)
        return () => {
            lightbox.destroy();
        };
    }, []); // empty deps = run once on mount

    return (
        <div className="gallery-container container py-4" style={{position: "relative", zIndex: 1, width: "100%"}}>
            {/* Hint + attribution row */}
            <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                <small className="text-secondary">
                    <i className="bi bi-hand-index me-1"></i>
                    Click or tap a photo to expand it
                </small>
                <small className="text-secondary">
                    Lightbox by <a href="https://www.fronttheme.com/docs/zoomora/" 
                        target="_blank" rel="noopener noreferrer" className="text-secondary">
                        Zoomora
                    </a>
                </small>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/comet.png" data-src="./art/comet.png"
                        data-zoomora="my-gallery" alt="comet" 
                        data-caption="comet"
                        />
                </div>

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/trapped.png" data-src="./art/trapped.png"
                        data-zoomora="my-gallery" alt="trapped" 
                        data-caption="trapped"
                        />
                </div>

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/watercolor.png" data-src="./art/watercolor.png"
                        data-zoomora="my-gallery" alt="watercolor" 
                        data-caption="watercolor"
                        />
                </div>

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/woo.png" data-src="./art/woo.png"
                        data-zoomora="my-gallery" alt="woo" 
                        data-caption="woo"
                        />
                </div>

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/alt-artwork.png" data-src="./art/alt-artwork.png"
                        data-zoomora="my-gallery" alt="alt-artwork" 
                        data-caption="alt-artwork"
                        />
                </div>

                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/intense.png" data-src="./art/intense.png"
                        data-zoomora="my-gallery" alt="intense" 
                        data-caption="intense"
                        />
                </div>
                <div className="col">
                    <img className="img-fluid rounded w-100" style={{objectFit: "cover", aspectRatio: "1"}}
                        src="./art/eye.png" data-src="./art/eye.png"
                        data-zoomora="my-gallery" alt="eye" 
                        data-caption="eye"
                        />
                </div>

            </div>
        </div>
    );
}