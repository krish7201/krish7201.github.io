// == UI Components ==
function GeneralButton({ label, onClick }) {
    return (
        <button className="btn btn-primary" onClick={onClick}>
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