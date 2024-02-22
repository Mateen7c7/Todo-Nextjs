function Service({ handleState, setSearchNull, search, setSearch }) {
    return (
        <div className="bg-green-100 w-full h-10  ">

            <div className="flex gap-2">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-green-100 p-2" placeholder="search" />
                <button onClick={() => {
                    handleState("all");
                    setSearchNull()
                }} className="border-2  border-green-400 rounded-md px-2 py-1">All</button>
                <button onClick={() => {
                    handleState("active");
                    setSearchNull()
                }} className="border-2 border-green-400 rounded-md px-2 py-1">Active</button>
                <button onClick={() => {
                    handleState("complete");
                    setSearchNull()
                }} className="border-2 border-green-400 rounded-md px-2 py-1">Completed</button>
            </div>
        </div>
    )
}

export default Service
