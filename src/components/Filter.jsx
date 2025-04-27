import { useState } from "react";
import { FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import {
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Tooltip,
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
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortOrderAsc, setSortOrderAsc] = useState(true);

    const handleCategoryChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSortToggle = () => {
        setSortOrderAsc((prev) => !prev);
    };

    const handleClearFilter = () => {
        setSearch("");
        setCategory("all");
        setSortOrderAsc(true);
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* SEARCH BAR */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search Products"
                    className="border border-gray-300 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 text-slate-500" size={20} />
            </div>

            {/* FILTER CONTROLS */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
                {/* CATEGORY SELECT */}
                <FormControl size="small" className="min-w-[150px]">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((item) => (
                            <MenuItem key={item.categoryId} value={item.categoryName}>
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* SORT BUTTON */}
                <Tooltip title={`Sorted by price: ${sortOrderAsc ? "asc" : "desc"}`}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSortToggle}
                        className="flex items-center gap-2 h-10"
                    >
                        Sort by
                        <FiArrowUp
                            size={20}
                            className={`${sortOrderAsc ? "" : "rotate-180 transition-transform"}`}
                        />
                    </Button>
                </Tooltip>

                {/* CLEAR FILTER */}
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClearFilter}
                    className="flex items-center gap-2 h-10"
                >
                    <FiRefreshCw size={16} />
                    Clear Filter
                </Button>
            </div>
        </div>
    );
};

export default Filter;