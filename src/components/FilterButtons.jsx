import React from "react"
const FilterButtons = () => {
    return (
        <div className="mt-3">
            <button className="m-2 p-2 border rounded-md text-sm">
                Show All Tasks
            </button>
            <button className="m-2 p-2 border rounded-md text-sm">
                Show Active Tasks
            </button>
            <button className="m-2 p-2 border rounded-md text-sm">
                Show Completed Tasks
            </button>
        </div>
    )
}

export default FilterButtons