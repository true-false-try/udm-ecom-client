import {Pagination} from "@mui/material";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Pagination = ({numberOfPage, totalProducts}) => {
    const PAGE = "page";

    const [searchParams] = useSearchParams()
    const pathname = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const currentPage = searchParams.get(PAGE) ?
        Number(searchParams.get(PAGE)) :
        1;
    const onChangeHandler =(event, value) =>  {
        params.set(PAGE, value.toString());
        navigate(`${pathname}?${params}`);
    }
    return (
        <Pagination count={numberOfPage}
                    page={currentPage}
                    defaultpage={1}
                    siblingCount={0}
                    boundaryCount={2}
                    shape="rounded"
                    onChange = {onChangeHandler}
        />
    )
}

export default Pagination;