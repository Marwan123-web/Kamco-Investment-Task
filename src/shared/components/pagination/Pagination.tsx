import React, { useState } from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import arrowRight from "../../../assets/images/arrow-right.svg";

const Pagination = ({
    ChangeFun,
    total = 0,
    limit = 10,
    data,
}: {
    ChangeFun?: Function;
    total: number;
    limit?: number;
    data: any;
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = (event: any) => {
        setCurrentPage(event);
        setCurrentPage(event);
        if (ChangeFun) ChangeFun(event);
    };
    const pageCount = Math.ceil(total / limit);
    return (
        <div>
            <div className="pagination-bar">
                <div className="pagination">
                    <div className="pages">
                        <ReactPaginate
                            previousLabel={<img src={arrowLeft} alt="previos" className="arrowIcon" />}
                            nextLabel={<img src={arrowRight} alt="next" />}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
