import React, { useRef, useImperativeHandle} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    let name = props.value;

    const focus = () => {
      inputRef.current.focus();
    };

    const vall = () => {
      name = "";
    };

    useImperativeHandle(ref, () => {
      return {
        focus: focus,
        vall: vall
      }
    });

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            value={name}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div> 
    )
});

export default Input;