import "./Radio.scss";
const Radio = ({
    id,
    name,
    label,
    changeFun,
    value = "",
    classes,
    options,
}: {
    classes?: string;
    id: string;
    name: string;
    label?: string;
    changeFun?: Function;
    value: string | number;
    options: { id: number; name: string; value: string }[];
}) => {
    const RunChangeFun = (e: any) => {
        if (changeFun) {
            changeFun(e.target.value);
        }
    };
    return (
        <div className="radio">
            {label && (
                <label htmlFor={id} className="radioLabel">
                    {label}
                </label>
            )}
            <div className="options">
                {options.map((option: { id: number; name: string; value: string }) => {
                    return (
                        <div className="option" key={option.id}>
                            <input
                                type="radio"
                                className={classes}
                                id={id}
                                name={name}
                                onChange={(e) => RunChangeFun(e)}
                                value={option.value}
                                checked={value === option.value}
                            />
                            <div className="optionLabel">{option.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Radio;
