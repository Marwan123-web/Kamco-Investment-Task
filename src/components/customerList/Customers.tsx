import "./Customers.scss";
import Table from "../../shared/components/table/Table";
const Customers = () => {
    let tableHeader = ["#", "Full  name", "Email", "Mobile number", "Account #", "Status", "Last login"];
    let tableData = [
        {
            id: 1,
            name: "Marwan Salman",
            email: "marawansalman98@gmail.com",
            mobile: "01009350660",
            account: "Account# 234551",
            status: "Verified",
            lastLogin: "July 01, 2021 - 01:46 AM",
        },
        {
            id: 2,
            name: "Marwan Salman",
            email: "marawansalman98@gmail.com",
            mobile: "01009350660",
            account: "Account# 234551",
            status: "failed",
            lastLogin: "July 01, 2021 - 01:46 AM",
        },
        {
            id: 3,
            name: "Marwan Salman",
            email: "marawansalman98@gmail.com",
            mobile: "01009350660",
            account: "Account# 234551",
            status: "Verified",
            lastLogin: "July 01, 2021 - 01:46 AM",
        },
    ];
    return (
        <div>
            <Table headers={tableHeader}>
                {tableData.map((rowData: any, index: number) => {
                    return (
                        <tr>
                            <td className="td">{index}</td>
                            <td className="td underline">{rowData.name}</td>
                            <td className="td">{rowData.email}</td>
                            <td className="td">{rowData.mobile}</td>
                            <td className="td underline">{rowData.account}</td>
                            <td className={rowData.status === "Verified" ? "td status success" : "td status failed"}>
                                {rowData.status}
                            </td>
                            <td className="td">{rowData.lastLogin}</td>
                        </tr>
                    );
                })}
            </Table>
        </div>
    );
};

export default Customers;
