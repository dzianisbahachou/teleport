import cl from './LoginButton.module.css'

export default function LoginButton({children, disabled, ...props}) {
    const classes = [cl. button];

    if (disabled) {
        classes.push(cl.disabled);
    }

    return (
        <button disabled={disabled} {...props} className={classes.join(' ')}>{children}</button>
    );
}
