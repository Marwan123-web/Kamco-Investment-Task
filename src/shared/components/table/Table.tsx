import sortImg from "../../../assets/images/more.svg";
import exportImg from "../../../assets/images/export.svg";
import uploadImg from "../../../assets/images/document-upload.svg";
import searchImg from "../../../assets/images/Search.svg";
import gridImg from "../../../assets/images/grid-5.svg";
import "./Table.scss";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
const Table = ({
    headers,
    data,
    total,
    limit,
    children,
}: {
    headers: any;
    total: number;
    limit: number;
    data: any;
    children?: any;
}) => {
    const [displayedData, setDisplayedData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = ({ selected }: { selected: number }) => {
        console.log("aaaaaa", selected);

        setCurrentPage(selected + 1);
        const startIndex = (selected + 1 - 1) * limit;
        const endIndex = startIndex + limit;
        const newDisplayedData = data.slice(startIndex, endIndex);
        setDisplayedData(newDisplayedData);
    };
    const sliceData = () => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const newDisplayedData = data.slice(startIndex, endIndex);
        setDisplayedData(newDisplayedData);
    };
    useEffect(() => {
        handleChangePage({ selected: 0 });
        sliceData();
    }, [data]);
    return (
        <div className="tableBox">
            <div className="topHeader">
                <div className="title">Customers list</div>
                <div className="actions">
                    <img src={searchImg} alt="searchImg" />
                    <img src={gridImg} alt="gridImg" />
                    <img src={exportImg} alt="export" />
                    <img src={uploadImg} alt="uploadImg" />
                </div>
            </div>
            <table className="table" id="table">
                <thead className="header">
                    <tr>
                        {headers.map((header: any) => {
                            return (
                                <th className="th" key={"header-" + header}>
                                    <span>{header}</span>
                                    <img className="sort-img" src={sortImg} alt="sort" />
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="body">
                    {displayedData.map((rowData: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="td">{index}</td>
                                <td className="td underline">{rowData.firstName + " " + rowData.lastName}</td>
                                <td className="td">{rowData.email}</td>
                                <td className="td">{rowData.mobile}</td>
                                <td className="td underline">{rowData.account}</td>
                                <td className={rowData.status === true ? "td status success" : "td status failed"}>
                                    {rowData.status ? "Verified" : "Not Verified"}
                                </td>
                                <td className="td">{rowData.lastLogin}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="tableFooter">
                <div className="info">
                    Showing 1 to {displayedData.length} of {total} entries
                </div>
                <div className="pagination">
                    <Pagination
                        data={data}
                        limit={limit}
                        total={data.length}
                        ChangeFun={handleChangePage}
                        currentP={currentPage - 1}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
