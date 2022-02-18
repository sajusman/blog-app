import React, { useCallback, useState } from 'react';
import { useDivElementLeave } from '../custom-hooks/useDivElementLeave';


interface IProps {
    children: JSX.Element;
    placeHolder: string;

}

function Modal({ children, placeHolder }: IProps) {

    const [showModal, setShowModal] = useState(() => false);
    const handleModalLeave = useCallback(() => {
        setShowModal(false);
    }, [setShowModal])

    const wrapperRef = useDivElementLeave(handleModalLeave);

    const ClonedElementWithMoreProps = React.cloneElement(
        children,
        { handleModalLeave }
    );

    return (
        <>
            <button onClick={() => {
                setShowModal(true);
            }}>{placeHolder}</button>

            <div className={showModal ? 'modal' : 'modal hidden'}>
                <div ref={wrapperRef}>
                    {ClonedElementWithMoreProps}
                </div>
            </div>
        </>

    );
}

export default Modal;