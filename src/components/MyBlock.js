import React from 'react';

const MyBlock = ({ render = () => {}, title, backgroundColor }) => (
    <div data-test="MyBlockComponent"
        style={
            {
                backgroundColor,
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginBottom: "20px"
            }
        }
    >
        <center><h1>{title}</h1></center>
        {render()}
    </div>
);
export default MyBlock;