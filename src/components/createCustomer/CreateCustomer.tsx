import React from "react";
import "./CreateCustomer.scss";
import Input from "../../shared/components/input/Input";
import Select from "../../shared/components/select/Select";
import Radio from "../../shared/components/radio/Radio";
import Toggle from "../../shared/components/toggle/Toggle";
import Button from "../../shared/components/button/Button";
const CreateCustomer = () => {
    let titleOptions = [
        { id: 1, name: "Select account type", value: "" },
        { id: 2, name: "Engineer", value: "eng" },
        { id: 3, name: "Lawer", value: "Lr" },
        { id: 4, name: "Doctor", value: "dr" },
    ];
    let genderOptions = [
        { id: 1, name: "Male", value: "male" },
        { id: 2, name: "Female", value: "female" },
    ];

    let countriesOptions = [
        { id: 1, name: "+123", value: "AED", image: "https://flagcdn.com/ae.svg" },
        { id: 2, name: "+345", value: "AFN", image: "https://flagcdn.com/af.svg" },
        { id: 3, name: "+765", value: "ALL", image: "https://flagcdn.com/al.svg" },
    ];
    return (
        <div className="box">
            <div className="label">Create a customer</div>
            <div className="formFields">
                <Input id="firstName" placeholder="Enter customer first name" label="First name" />
                <Input id="lastName" placeholder="Enter customer last name" label="Last name" />
                <Input
                    id="mobilenumber"
                    placeholder="Enter customer mobile number"
                    label="Mobile number"
                    type="mobile"
                    options={countriesOptions}
                />
                <Select id="title" label="Title" options={titleOptions} />
                <Radio id="gender" label="Gender" name="gender" options={genderOptions} value="male" />

                <Toggle id="status" checked={true} label="Status" />
            </div>
            <div className="submitbtn">
                <Button label="Create account" disabled={false} />
            </div>
        </div>
    );
};

export default CreateCustomer;
