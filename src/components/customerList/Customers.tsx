import "./Customers.scss";
import Table from "../../shared/components/table/Table";
import CreateCustomer from "../createCustomer/CreateCustomer";
const Customers = ({
    headers,
    data,
}: {
    headers: string[];
    data: {
        id: number;
        name: string;
        email: string;
        mobile: string;
        account: string;
        status: string;
        lastLogin: string;
    }[];
}) => {
    return (
        <div className="customersPage">
            <div className="createForm">
                <CreateCustomer />
            </div>
            <div className="customersList">
                <Table headers={headers} total={data.length} limit={2} data={data}>
                    {data.map((rowData: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="td">{index}</td>
                                <td className="td underline">{rowData.name}</td>
                                <td className="td">{rowData.email}</td>
                                <td className="td">{rowData.mobile}</td>
                                <td className="td underline">{rowData.account}</td>
                                <td
                                    className={rowData.status === "Verified" ? "td status success" : "td status failed"}
                                >
                                    {rowData.status}
                                </td>
                                <td className="td">{rowData.lastLogin}</td>
                            </tr>
                        );
                    })}
                </Table>
            </div>
        </div>
    );
};

export default Customers;
