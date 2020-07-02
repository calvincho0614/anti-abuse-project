import React from 'react';

const MyIcon = ({ text }) => {
    const styleContainer = {
        height: '100%',
        display: 'table',
        width: '100%',
        textAlign: 'center'
    },
    styleLoadingImg = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100px',
        heigth: '100px'
    },
    title = text
        ? text
        : 'loading ...';
    return <div data-test="MyIconComponent" style={styleContainer}>
        <img src="../loading-ajax.gif" alt="loading" style={styleLoadingImg}></img>
        <small>{title}</small>
    </div>;
};
export default MyIcon;