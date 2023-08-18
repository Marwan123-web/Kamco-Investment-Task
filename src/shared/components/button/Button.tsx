import "./Button.scss";
const Button = ({
    classes = "",
    label,
    ButtonFun,
    children,
    disabled,
}: {
    classes?: string;
    label: string;
    ButtonFun?: Function;
    children?: any;
    disabled?: boolean;
}) => {
    const runButtonFun = () => {
        if (ButtonFun) ButtonFun();
    };
    return (
        <button className={classes + "btn"} onClick={() => runButtonFun()} disabled={disabled}>
            {label ? label : children}
        </button>
    );
};

export default Button;
