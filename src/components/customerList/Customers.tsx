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
                <Table headers={headers} total={data.length} limit={5} data={data}></Table>
            </div>
        </div>
    );
};

export default Customers;
