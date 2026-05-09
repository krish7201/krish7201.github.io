function Home({ className }) {
    return (
        <section className={`d-flex align-items-center justify-content-center px-3 py-2 home-section ${className || ''}`} style={{zIndex: 1}}>
            <h2 className="flex-fill text-center px-3">A single-page application built with <a href="https://react.dev/">React</a> + <a href="https://babeljs.io/">Babel</a> (no bundler).</h2>
        </section>
    );
}