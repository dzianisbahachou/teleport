import classes from "./Input.module.css";

const Input = (props) => {
    let name = props.value;

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            value={name}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div> 
    )
};

export default Input;