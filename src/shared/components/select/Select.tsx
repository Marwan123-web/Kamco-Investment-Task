import "./Select.scss";
const Select = ({
    id,
    label,
    value,
    classes,
    options,
    changeFun,
}: {
    id: string;
    label: string;
    value?: string;
    classes?: string;
    options: { id: number; name: string; value: string }[];
    changeFun?: Function;
}) => {
    const RunChangeFun = (e: any) => {
        if (changeFun) {
            changeFun(e.target.value);
        }
    };
    return (
        <div className="select" id={id}>
            {label && <label htmlFor="select-list">{label}</label>}
            <select id="select-list" className={classes} value={value} onChange={(e) => RunChangeFun(e)}>
                {options.map((option: { id: number; name: string; value: string }) => {
                    return (
                        <option value={option.value} key={option.id}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
