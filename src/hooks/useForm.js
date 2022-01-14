// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initValue) => {
    const [values, setValues] = useState(initValue);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.values
        })
    }

    const clearForm = e => {
        e.preventDefault();
        setValues(initValue)
    }

    return (
        [values, handleChanges, clearForm]
    )
}

export default useForm;