import {useState} from "react";
import {FiSearch} from "react-icons/fi";
import {FormControl, InputLabel} from "@mui/material";

const Filter = () => {
    const categories = [
        {categoryId: 1, categoryName: "Electronics"},
        {categoryId: 2, categoryName: "Clothing"},
        {categoryId: 3, categoryName: "Furniture"},
        {categoryId: 4, categoryName: "Books"},
        {categoryId: 5, categoryName: "Toys"},
    ];

    const [category, setCategory] = useState("all");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return(
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* SEARCH BAR */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search Products"
                    className="border border-grey-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:otline-none focus:ring-2 focus:ring-[#1976d2]"/>
                <FiSearch  className="absolute left-3 text-slate-800 size={20}"/>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl
                    className="outlined"
                    size="small">
                    <InputLabel>Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category">
                        <MenuItem value="all">All</MenuItem>
                    </Select>
                </FormControl>
            </div>


        </div>
    )
}
export default Filter;