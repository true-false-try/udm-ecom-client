import { useEffect, useState } from "react";
import { FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import {
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip
} from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = () => {
    const categories = [
        { categoryId: 1, categoryName: "Electronics" },
        { categoryId: 2, categoryName: "Clothing" },
        { categoryId: 3, categoryName: "Furniture" },
        { categoryId: 4, categoryName: "Books" },
        { categoryId: 5, categoryName: "Toys" },
    ];

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setCategory(searchParams.get("category") || "all");
        setSortOrder(searchParams.get("sortby") || "asc");
        setSearchTerm(searchParams.get("keyword") || "");
    }, [searchParams]);

    const updateParams = (newParams) => {
        const params = new URLSearchParams(searchParams);
        Object.entries(newParams).forEach(([key, value]) => {
            if (value === "all" || value === "") {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        navigate(`?${params.toString()}`);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        updateParams({ category: event.target.value });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        updateParams({ keyword: searchTerm });
    };

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
        updateParams({ sortby: newSortOrder });
    };

    const handleClearFilters = () => {
        setCategory("all");
        setSortOrder("asc");
        setSearchTerm("");
        navigate(pathname); // remove all params
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* Search */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-grey-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
                />
                <button type="submit">
                    <FiSearch className="absolute left-3 text-slate-800" size={20} />
                </button>
            </form>

            <div className="flex sm:flex-row flex-col gap-4 items-center">
                {/* Category Select */}
                <FormControl size="small">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                        className="min-w-[120px] text-slate-800"
                    >
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((item) => (
                            <MenuItem key={item.categoryId} value={item.categoryName}>
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Sort Toggle */}
                <Tooltip title={`Sorted by price: ${sortOrder}`}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="flex items-center gap-2 h-10"
                        onClick={toggleSortOrder}
                    >
                        Sort by
                        <FiArrowUp
                            size={20}
                            style={{ transform: sortOrder === "asc" ? "rotate(0deg)" : "rotate(180deg)" }}
                        />
                    </Button>
                </Tooltip>

                {/* Clear Filters */}
                <button
                    onClick={handleClearFilters}
                    className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300"
                >
                    <FiRefreshCw size={16} />
                    <span className="font-semibold">Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;
