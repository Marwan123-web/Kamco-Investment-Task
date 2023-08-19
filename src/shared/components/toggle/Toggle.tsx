import "./Toggle.scss";
const Toggle = ({
    id,
    classes,
    changeFun,
    disabled,
    checked = false,
    label,
}: {
    label: string;
    id: string;
    classes?: string;
    changeFun?: Function;
    disabled?: boolean;
    checked?: boolean;
}) => {
    const runChangeFun = (event: any) => {
        if (changeFun) changeFun(event.target.checked);
    };
    return (
        <div className="field">
            <label className="toggleLabel">{label}</label>

            <div className="togle">
                <label htmlFor="status">Inactive</label>
                <div id="toggle-switch" className={classes}>
                    <input
                        id={id}
                        type="checkbox"
                        onChange={(e) => runChangeFun(e)}
                        disabled={disabled}
                        checked={checked}
                    />

                    <label
                        className="circle"
                        htmlFor={id}
                        style={{ cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "0.3" : "1" }}
                    >
                        <span className="circle-shape"></span>
                    </label>
                </div>
                <label htmlFor="status">Active</label>
            </div>
        </div>
    );
};

export default Toggle;
