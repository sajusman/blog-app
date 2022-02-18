import { useState } from "react";



export function useForm<T>(initialValues: T): [T, (e: any) => void] {
    const [values, setValues] = useState<T>(initialValues);
    return [
        values,
        (e: any) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ]
}