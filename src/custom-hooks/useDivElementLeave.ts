import { useEffect, useRef } from 'react';


export function useDivElementLeave(handleOnLeave: any) {


    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref && !ref.current?.contains(event.target)) {
                handleOnLeave();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleOnLeave]);

    return ref;
}