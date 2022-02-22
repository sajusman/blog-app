import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


interface IProps {
    loading: boolean,
    testId?: string
}

function Loader({ loading, testId }: IProps) {
    const styles = {
        paddingTop: 'calc(20vh - 12px)',
        paddingLeft: '45%',
    };

    return (
        <div data-testid={testId} style={styles}>
            <ClipLoader loading={loading} size={150} color='#BD9757' />
        </div>
    );
}

export default Loader;