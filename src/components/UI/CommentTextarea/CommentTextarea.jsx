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
            {...props} ref={inputRef} className={classes} value={name}>
        </textarea>
    );
});

export default CommentTextarea;