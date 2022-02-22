import React from 'react';
import "./Home.css"

function Home() {
    return (
        <>
            <h2>Home</h2>
            <h3>Welcome to the Blog App</h3>
            <p data-testid='lorem-ipsum'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan consectetur tortor sed ornare.
                Nunc eget sapien ornare, lobortis magna sed, efficitur ante. Suspendisse quis pharetra lorem, sed pharetra risus.
                Integer imperdiet lorem quam, vel euismod lacus molestie et. Etiam neque ante, scelerisque sit amet erat id, vehicula viverra ipsum.
                Mauris dictum quis ligula porttitor facilisis. Donec ac ipsum eget arcu semper dapibus. Proin at commodo ante. Ut tortor mi,
                venenatis ac quam et, facilisis laoreet ante. Nam sagittis metus id eros ultrices finibus.
                Donec fringilla hendrerit velit ut condimentum. Duis sit amet bibendum ante.
            </p>
        </>
    );
}

export default Home;