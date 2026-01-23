import {useEffect, useState} from "react";
import {FiArrowDown, FiArrowUp, FiRefreshCcw, FiRefreshCw, FiSearch} from "react-icons/fi";
import {Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip} from "@mui/material";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Filter = ({categories}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [category, setCategory] = useState("all");

    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    const params = new URLSearchParams(searchParams);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if(selectedCategory === 'all'){
            params.delete("category");
        } else {
            params.set("category", selectedCategory)
        }
        navigate(`${pathname}?${params}`)
        setCategory(event.target.value);
    };



    const handleClearFilter = () => {
        navigate({pathname : window.location.pathname})
    };

    return(
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* SEARCH BAR */}

            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl
                    className="text-slate-800 border-slate-700"
                    size="small">
                    <InputLabel id="category-select-label">Category</InputLabel>

                </FormControl>
                {/*SORT BUTTON & CLEAR FILTER*/}
                <Tooltip title="Sorted by price: asc">
                    <Button onClick={toggleSortOrder} variant="contained" color="primary" className="flex items-center gap-2 h-10">
                        Sort by
                        {sortOrder === "asc"} ? (
                        <FiArrowUp size={20} />
                        ) : (
                        <FiArrowDown size={20} />
                        )
                    </Button>
                </Tooltip>
                <button
                    className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300"
                    onClick={handleClearFilter}
                >

                    <span className="font-semibold">Clear Filter</span>

                </button>
            </div>


        </div>
    )
}
export default Filter;