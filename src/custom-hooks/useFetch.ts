import { useEffect, useState } from "react";

export function useFetch(url: string) {

    const [state, setState] = useState(null);

    useEffect(() => {
        setState(null);
        const fetchGet = async () => {
            const res = (await ((await fetch(url)).json()));
            setState(res);
        };

        fetchGet();

        return () => {

        }
    }, [url])

    return state;
}