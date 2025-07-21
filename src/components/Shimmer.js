const Shimmer = () => {
    return (
        <div className="body">
            <div className="body-div">          
                <form action="/search" method="GET" className="search-bar">
                    <input type="search" name="q" placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="resMain">
                <div className="shimmer-cards"></div>
                <div className="shimmer-cards"></div>
                <div className="shimmer-cards"></div>
                <div className="shimmer-cards"></div>
            </div>
        </div>
    )
}

export default Shimmer;