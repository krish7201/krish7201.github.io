

// React Component with Dynamic CSS
function GeneralButton({ label, onClick }) {
    // Dynamically inject CSS using JavaScript
    React.useEffect(() => {
        const style = `
            button {
                position: relative;
                background-color: black !important;
                margin-right: 0%;
                border: 2px solid white !important; /* Transparent border to avoid double borders */
                z-index: 1;
            }

            button::after {
                content: '' !important;
                position: absolute !important;
                width: calc(105%) !important; /* Expand beyond the button for the border effect * !important/
                height: calc(105%) !important;
                border-radius: inherit; /* Match the button's border radius * !important/
                background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000) !important;
                background-size: 400% !important;
                z-index: -1 !important; /* Ensure it stays behind the button content * !important/
                animation: steam 20s linear infinite !important;
                opacity: 0 !important;
                transition: opacity 0.5s ease-in-out !important;
            }

            button:hover::before {
                opacity: 1 !important; /* Reveal the gradient border on hover */
            }


            @keyframes steam {
                0% {
                    background-position: 0 0;
                }
                50% {
                    background-position: 400% 0;
                }
                100% {
                    background-position: 0 0;
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = style;
        document.head.appendChild (styleSheet);

        // Cleanup: Remove the style tag when the component unmounts
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <button class="btn btn-primary" onClick={onClick}>
            {label}
        </button>
    );
}

function Navigation({ onChangePage }) {
    return (
        <nav class="d-flex">
            <GeneralButton label="Home" onClick={() => onChangePage('home')}></GeneralButton>
            <GeneralButton label="About" onClick={() => onChangePage('about')}></GeneralButton>
            <GeneralButton label="Contact" onClick={() => onChangePage('contact')}></GeneralButton>
        </nav>
    );
}