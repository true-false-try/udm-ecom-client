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

    useEffect(() => {
        const handler = setTimeout(() => {
            if(searchParams){
                searchParams.set("keyword", searchTerm);
            } else {
                searchParams.delete("keyword")
            }
            navigate(`${pathname}?${searchParams.toString()}`);
        }, 700);
        return () => {
            clearTimeout(handler);
        }
    }, [searchParams, searchTerm, navigate, pathname])

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

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) =>  {
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            params.set("sortby", newOrder);
            navigate(`${pathname}?${params}`);
            return newOrder;
        })
    };

    const handleClearFilter = () => {
        navigate({pathname : window.location.pathname})
    };

    return(
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* SEARCH BAR */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-grey-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:otline-none focus:ring-2 focus:ring-[#1976d2]"/>
                <FiSearch  className="absolute left-3 text-slate-800 size={20}"/>
            </div>

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