function Footer() { 
    const { currentPage, setCurrentPage } = useApp();
    const year = new Date().getFullYear()  // returns the current year

    return (
        <footer className="mt-auto py-3 bg-dark text-white">
            <p className="flex-fill text-center m-0">© {year}</p>
        </footer>
    );
}