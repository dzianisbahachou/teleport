import { useState } from "react";

const useInput = validateValue => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputPhoneChangeHandler = event => {
        setEnteredValue(event);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    const resetPhone = () => {
        setEnteredValue("375");
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        inputPhoneChangeHandler,
        reset,
        resetPhone
    }
};

export default useInput;