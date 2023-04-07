import React, { useRef, useImperativeHandle} from "react";

import cl from './CommentInput.module.css';

const CommentInput = React.forwardRef((props, ref) => {
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

    const classes = props.isInvalid ? `${cl.input} ${cl.invalid}` : cl.input;

    return (
      <input
        ref={inputRef}
        name={props.name} 
        placeholder={props.placeholder} 
        autoComplete={props.autoComplete}  
        type="text" 
        className={classes} 
        value={name}
        onClick={props.onClick}
        onChange={props.onChange}
        onBlur={props.onBlur}
        inputMode={props.inputMode}
        onKeyDown={props.onKeyDown}/>
    );
});

export default CommentInput;