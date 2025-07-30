const Shimmer = () => {
    return (
        <div className="body">
            <div className="body-div">          
                <form action="/search" method="GET" className="search-bar">
                    <input type="search" name="q" placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="resMain grid grid-cols-4 justify-center overflow-y-auto p-6.25">
                <div className="shimmer-cards w-62.5 h-75 bg-[#f0f0f0]"></div>
                <div className="shimmer-cards w-62.5 h-75 bg-[#f0f0f0]"></div>
                <div className="shimmer-cards w-62.5 h-75 bg-[#f0f0f0]"></div>
                <div className="shimmer-cards w-62.5 h-75 bg-[#f0f0f0]"></div>
            </div>
        </div>
    )
}

export default Shimmer;