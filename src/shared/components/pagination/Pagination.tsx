import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import arrowRight from "../../../assets/images/arrow-right.svg";

const Pagination = ({
    ChangeFun,
    total = 0,
    limit = 10,
    data,
    currentP,
}: {
    ChangeFun?: Function;
    total: number;
    limit?: number;
    data?: any;
    currentP: number;
}) => {
    const [currentPage, setCurrentPage] = useState(currentP);
    const handlePageChange = (event: any) => {
        setCurrentPage(event.selected);
        if (ChangeFun) ChangeFun(event);
    };
    useEffect(() => {
        setCurrentPage(currentP);
    }, [currentP]);
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
                            forcePage={currentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
