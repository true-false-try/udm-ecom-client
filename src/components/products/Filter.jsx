import {useState} from "react";
import {FiArrowDown, FiArrowUp, FiSearch} from "react-icons/fi";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Filter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [category, setCategory] = useState("all");

    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const buildParams = () => new URLSearchParams(searchParams);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const params = buildParams();
        if (value) {
            params.set("keyword", value);
        } else {
            params.delete("keyword");
        }
        navigate(`${pathname}?${params}`);
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        const params = buildParams();
        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathname}?${params}`);
        setCategory(selectedCategory);
    };

    const toggleSortOrder = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);
        const params = buildParams();
        params.set("sortBy", "price");
        params.set("sortOrder", newOrder);
        navigate(`${pathname}?${params}`);
    };

    const handleClearFilter = () => {
        setSearchTerm("");
        setCategory("all");
        setSortOrder("asc");
        navigate(pathname);
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4 mb-4">
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
                />
                <FiSearch className="absolute left-3 text-slate-800" size={20} />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl className="text-slate-800" size="small" sx={{minWidth: 140}}>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        label="Category"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="electronics">Electronics</MenuItem>
                        <MenuItem value="clothing">Clothing</MenuItem>
                        <MenuItem value="furniture">Furniture</MenuItem>
                    </Select>
                </FormControl>

                <Button onClick={toggleSortOrder} variant="contained" color="primary" className="flex items-center gap-2 h-10">
                    Sort by price&nbsp;
                    {sortOrder === "asc" ? (
                        <FiArrowUp size={20} />
                    ) : (
                        <FiArrowDown size={20} />
                    )}
                </Button>

                <button
                    className="flex items-center gap-2 bg-rose-700 text-white px-3 py-2 rounded-md hover:bg-rose-800 transition duration-300"
                    onClick={handleClearFilter}
                >
                    <span className="font-semibold">Clear Filter</span>
                </button>
            </div>
        </div>
    );
}

export default Filter;
