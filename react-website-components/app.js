// == Main App Component ==
function MyApp() {
    const [currentPage, setCurrentPage] = React.useState('home');

    return ( 
        <AppContext.Provider value={{ currentPage, setCurrentPage }}>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </AppContext.Provider>
    );
}

function useApp() {
    return React.useContext(AppContext);
}

// == Render to DOM ==
const AppContext = React.createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp></MyApp>);