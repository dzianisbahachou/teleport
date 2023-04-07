import cl from './CommentTextarea.module.css';
import React, { useRef, useImperativeHandle} from "react";

const CommentTextarea = React.forwardRef((props, ref) => {
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

    const classes = props.isInvalid ? `${cl.textarea} ${cl.invalid}` : cl.textarea;

    return (
        <textarea  
            ref={inputRef}
            name={props.name}
            className={classes} 
            value={name}
            rows={props.rows}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}>
        </textarea>
    );
});

export default CommentTextarea;