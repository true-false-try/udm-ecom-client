import {Pagination} from "@mui/material";

const Pagination = () => {
    return (
        <Pagination count={110}
                    defaultpage={6}
                    siblingCount={1}
                    boundaryCount={2}
                    shape="rounded"
        />
    )
}

export default Pagination;