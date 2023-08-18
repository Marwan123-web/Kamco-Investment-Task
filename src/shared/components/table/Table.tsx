import sortImg from "../../../assets/images/more.svg";
import exportImg from "../../../assets/images/export.svg";
import uploadImg from "../../../assets/images/document-upload.svg";
import searchImg from "../../../assets/images/Search.svg";
import gridImg from "../../../assets/images/grid-5.svg";
import "./Table.scss";
import Pagination from "../pagination/Pagination";
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
                <tbody className="body">{children}</tbody>
            </table>
            <div className="tableFooter">
                <div className="info">
                    Showing 1 to {total} of {total} entries
                </div>
                <div className="pagination">
                    <Pagination data={data} limit={limit} total={data.length} />
                </div>
            </div>
        </div>
    );
};

export default Table;
